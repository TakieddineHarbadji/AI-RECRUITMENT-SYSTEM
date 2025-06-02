from fastapi import FastAPI
from Manage_Authentication.Requests import authApp
from Manage_Db.Database.Requests import dataBaseAPP
app = FastAPI()

app.mount("/auth", authApp)
app.mount("/database", dataBaseAPP)