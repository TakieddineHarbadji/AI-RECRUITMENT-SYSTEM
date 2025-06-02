from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel
from datetime import datetime, timedelta
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import Limiter
from slowapi.util import get_remote_address
from fastapi import Request
from slowapi.errors import RateLimitExceeded
from fastapi.responses import PlainTextResponse
from fastapi.middleware.trustedhost import TrustedHostMiddleware
import json

limiter = Limiter(key_func=get_remote_address)



class LoginRequest(BaseModel):
    username: str
    password: str
    remember_me: bool



authApp = FastAPI()
authApp.state.limiter = limiter
authApp.add_exception_handler(RateLimitExceeded, lambda r, e: PlainTextResponse("Too many requests", status_code=429))

authApp.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # ✅ Use exact origin of your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SECRET_KEY = "secretkey"  # Replace with strong key in production
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Dummy user store
json_string = '''
{
    "cruiz": {
        "candidate_id": 10,
        "full_name": "Carlos Ruiz",
        "username": "cruiz",
        "email": "carlos.r@example.mx",
        "password": "$2b$12$g1WirncUTiyshw1ofPCh0eyhRfGlGQu4WEt4pT7FJGYR99Ni7hxCm",
        "created_at": "2025-05-28",
        "gender": "Male",
        "website": null,
        "nationality": "Mexican",
        "date_of_birth": "1995-01-08",
        "marital_status": "Single",
        "educations": [
            "BSc in Computer Science",
            "MSc in Artificial Intelligence"
        ],
        "experiences": [
            "3 years at Google",
            "5 years at Sonatrach"
        ],
        "biography": "Keen to explore embedded systems.",
        "title": "Junior Engineer",
        "location": "Mexico City",
        "phone": "5512345678",
        "profile_privacy": false,
        "resume": null,
        "n1": false,
        "n2": false,
        "n3": false,
        "n4": false,
        "n5": false,
        "language": "Spanish",
        "country": "Mexico",
        "imagepath": null,
        "banner_image_path": null,
        "progress": 70,
        "views": 0
    }
}
'''
fake_users_db = json.loads(json_string)
 

class Token(BaseModel):
    access_token: str
    token_type: str

class User(BaseModel):
    username: str
    full_name: str

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def authenticate_user(username: str, password: str):
    user = fake_users_db.get(username)
    if not user or not verify_password(password, user['password']):
        return False
    return user

def isAllowedUsername(token: str, username: str):
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    tokenusername = payload.get("sub")
    user = fake_users_db.get(tokenusername)
    if not user["username"]==username:
        return False
    return True
def isAllowedID(token: str, username: str):
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    tokenusername = payload.get("sub")
    user = fake_users_db.get(tokenusername)
    if not user["id"]==username:
        return False
    return True
def create_access_token(data: dict, expires_delta: timedelta = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)


@authApp.post("/token", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token({"sub": user["username"]})
    return {"access_token": token, "token_type": "bearer"}

@authApp.get("/me")
async def get_me(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        user = fake_users_db.get(username)
        return user
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")


@authApp.post("/login")
@limiter.limit("8/minute")  # Allow only 5 attempts per minute per IP
def login(data: LoginRequest , request: Request):
    user = authenticate_user(data.username, data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token({"sub": user["username"]})

    response = JSONResponse(content={"access_token": access_token})

    if user:  # login successful
        response = JSONResponse(content={"access_token": access_token})

        # Always issue a refresh_token, but control lifespan
        refresh_token = create_access_token({"sub": user["username"]}, timedelta(days=30))
 
        if data.remember_me:
            response.set_cookie(
                key="refresh_token",
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite="strict",
                max_age=30 * 24 * 60 * 60  # 30 days
            )
        else:
            # Session cookie: expires when browser closes
            response.set_cookie(
                key="refresh_token",
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite="strict"
                # no max_age => session cookie
            )

    return response


from fastapi import Response

@authApp.post("/logout")
def logout(response: Response):
    response.delete_cookie("refresh_token")
    return {"message": "Logged out"}

from fastapi import Request

@authApp.post("/refresh", response_model=Token)
def refresh_token(request: Request):
    refresh_token = request.cookies.get("refresh_token")
    if not refresh_token:
        raise HTTPException(status_code=401, detail="No refresh token found")

    try:
        payload = jwt.decode(refresh_token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username not in fake_users_db:
            raise HTTPException(status_code=401, detail="Invalid user")

        # Create new access token
        new_access_token = create_access_token({"sub": username})
        return {"access_token": new_access_token, "token_type": "bearer"}

    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid refresh token")


