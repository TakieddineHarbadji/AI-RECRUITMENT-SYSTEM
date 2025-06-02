from pydantic import BaseModel
from Manage_Db.Database.Factory import   handler_factory
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from fastapi import FastAPI, HTTPException,Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Query
from typing import List
from Manage_Authentication.Requests import isAllowedUsername,isAllowedID
dataBaseAPP = FastAPI() 
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

dataBaseAPP.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

def remove_password(data):
    """Remove the password field from the dictionary."""
    if 'password' in data:
        del data['password']
    return data

def remove_private_info(data):
    """Return a public-safe version of the candidate data."""
    # Always remove password
    data.pop('password', None)

    # Remove private fields if profile is private
    private_fields = [
         "username", "email", "phone",
        "date_of_birth", "marital_status", "gender",
        "nationality", "location", "biography", "resume",
        "created_at"
    ]

    if data.get("profile_privacy", False):
        for field in private_fields:
            data.pop(field, None)

    return data

#------------ do things by table's ID only (used for main tables such as users and companies)

# Example route to get all records from a table
@dataBaseAPP.get("/get_all/{table_name}")
def get_all(table_name: str):
    handler = handler_factory(table_name)
    return handler.get_all()

@dataBaseAPP.get("/get_batch/{table_name}/{start_index}/{batch_size}")
async def get_batch(table_name: str, start_index: int, batch_size: int):
    handler = handler_factory(table_name)
    return handler.get_batch(start_index, batch_size)

# Example route to get a single record by ID
@dataBaseAPP.get("/get/{table_name}/{record_id}")
async def get_record(table_name: str, record_id: int,token: str = Depends(oauth2_scheme)):
    handler = handler_factory(table_name)
    
    #if isAllowedID(token,record_id):
        #return remove_password(handler.get_by_id(record_id))
    #else :
        #return remove_private_info(handler.get_by_id(record_id))
    return handler.get_by_id(record_id)

# Example route to get by a query (get/{table_name}/?record_id=1&record_id=133)
@dataBaseAPP.get("/get/{table_name}")
async def get_multi_records_by_ids(table_name: str, record_id: List[int] = Query(...)):
    handler = handler_factory(table_name)
    return handler.get_by_multi_id(record_id)

# Example route to create a new record
@dataBaseAPP.post("/create/{table_name}")
async def create_record(table_name: str, data: dict):
    handler = handler_factory(table_name)
    return handler.create(data)

# Example route to update an existing record
@dataBaseAPP.put("/update/{table_name}/{record_id}")
async def update_record(table_name: str, record_id: int, data: dict):
    handler = handler_factory(table_name)
    return handler.update(record_id, data)

# Example route to delete a record
@dataBaseAPP.delete("/delete/{table_name}/{record_id}")
async def delete_record(table_name: str, record_id: int):
    handler = handler_factory(table_name)
    return handler.delete(record_id)


#------------ do things by Foreign Keys and Join tables

# get all instances having the same id as parent_id in the child table
@dataBaseAPP.get("/get_by_foreign/{parent_table}/{parent_id}/{child_table}")
async def get_by_foreign(parent_table: str, parent_id: int, child_table: str):
    handler = handler_factory(parent_table, child_table)
    if hasattr(handler, "get_by_foreign_key"):
        return handler.get_by_foreign_key(parent_id)
    else:
        raise HTTPException(status_code=400, detail="This handler does not support foreign key lookup")
    
# get all instances having the same id as parent_id in the child table (using join table)
@dataBaseAPP.get("/get_by_foreign_many_many/{parent_table}/{parent_id}/{join_table}/{child_table}")
async def get_by_foreign_many_many(parent_table: str, parent_id: int, join_table: str,child_table: str, target_id: List[int] = Query(default=[])):
    handler = handler_factory(parent_table, child_table)
    if hasattr(handler, "get_many_to_many"):
        return handler.get_many_to_many(join_table,parent_id,child_table, target_id)
    else:
        raise HTTPException(status_code=400, detail="This handler does not support foreign key lookup")

# -- Batch Versions

# get all instances having the same id as parent_id in the child table
@dataBaseAPP.get("/get_by_foreign_batch/{parent_table}/{parent_id}/{child_table}/{start_index}/{batch_size}")
async def get_by_foreign_batch(parent_table: str, parent_id: int, child_table: str, start_index: int, batch_size: int):
    handler = handler_factory(parent_table, child_table)
    if hasattr(handler, "get_by_foreign_key"):
        return handler.get_by_foreign_key_batch(parent_id, start_index, batch_size)
    else:
        raise HTTPException(status_code=400, detail="This handler does not support foreign key lookup")
    
# get all instances having the same id as parent_id in the child table (using join table)
@dataBaseAPP.get("/get_by_foreign_many_many_batch/{parent_table}/{parent_id}/{join_table}/{child_table}/{start_index}/{batch_size}")
async def get_by_foreign_many_many_batch(parent_table: str, parent_id: int, join_table: str,child_table: str, start_index: int, batch_size: int):
    handler = handler_factory(parent_table, child_table)
    if hasattr(handler, "get_many_to_many"):
        return handler.get_many_to_many_batch(join_table,parent_id,child_table, start_index, batch_size)
    else:
        raise HTTPException(status_code=400, detail="This handler does not support foreign key lookup")

@dataBaseAPP.get("/getBYusername/{table_name}/{username}")
async def get_record_username(table_name: str, username: str,token: str = Depends(oauth2_scheme)):
    handler = handler_factory(table_name) 
    return handler.get_by_username(username)
    