import re
from fastapi import HTTPException, UploadFile 
from supabase import create_client, Client 
import os

SUPABASE_URL = "https://avhrixisdjdyovzutxlx.supabase.co" 
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2aHJpeGlzZGpkeW92enV0eGx4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjU2NTMxMiwiZXhwIjoyMDYyMTQxMzEyfQ.jp444BtnwQ1uen2PMpCzsNGWEAZopbSFQnfqz0Etm1k" 
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

class DocumentHandler:
    def __init__(self, main:str ,folder_type: str, folder_name: str):
        self.folder_type = folder_type
        self.folder_name = folder_name
        self.main = main

    def get_doc(self, id: int):
        try:
            files = supabase.storage.from_(self.main).list(f"{self.folder_type}/{self.folder_name}{id}/")
            file_names = [image["name"] for image in files]
        except Exception as e:
            print("Error uploading file:", str(e))
            return {"error": str(e)}
        urls = []
        for file_name in file_names:
            file_path = f"{self.folder_type}/{self.folder_name}{id}/{file_name}"
            public_url = f"{SUPABASE_URL}/storage/v1/object/public/{self.main}/{file_path}"
            urls.append(public_url)
        return {"message": "Success","images_urls": urls}
    
    async def upload_doc(self, id : int, file: UploadFile): 
        file_bytes = await file.read() 
        file_extension = os.path.splitext(file.filename)[1][1:].lower()


        
        list = supabase.storage.from_(self.main).list(f"{self.folder_type}/{self.folder_name}{id}/")
        length = len(list)
        if(length > 0):
            name = list[length-1]["name"]
            match = re.search(r'_(\d+)\.', name)
            num = match.group(1) if match else 0
        else:
            num = 0
        file_name = f"{self.folder_name}{id}_{int(num) + 1}.{file_extension}"

        file_path = f"{self.folder_type}/{self.folder_name}{id}/{file_name}"
        try:
            supabase.storage.from_(self.main).upload(file_path, file_bytes, {"content-type": f'image/{file_extension}'})
        except Exception as e:
            print("Error uploading file:", str(e))
            return {"error": str(e)}
    
        public_url = f"{SUPABASE_URL}/storage/v1/object/public/{self.main}/{file_path}" 
    
        return {"message": "Document added successfully","public_url": public_url}
    
    async def replace_doc(self, id: int, image_num, file: UploadFile):
        try:
            file_bytes = await file.read()
            file_extension = file.filename.split(".")[-1] 


            
            file_name = f"{self.folder_name}{id}_{image_num}.{file_extension}"
            file_path = f"{self.folder_type}/{self.folder_name}{id}/{file_name}"

            supabase.storage.from_(self.main).remove([file_path])
            
            supabase.storage.from_(self.main).upload(file_path, file_bytes, {"content-type": f'image/{file_extension}'})

            return {"message": "Document updated successfully", "path": file_path}

        except Exception as e:
            return {"error": str(e)}
        
    def delete_doc(self, id: int, image_num):
        try:
            file_name = supabase.storage.from_(self.main).list(f"{self.folder_type}/{self.folder_name}{id}/")[image_num]["name"]
            file_path = f"{self.folder_type}/{self.folder_name}{id}/{file_name}"
            supabase.storage.from_(self.main).remove([file_path])

            return {"message": "Document deleted successfully"}

        except Exception as e:
            return {"error": str(e)}

# Subclass for handling Profile Picture (PFP) logic
class UserDocHandler(DocumentHandler):
    def __init__(self, type):
        super().__init__("users",type, "user")

# Subclass for handling Room Image logic
class CompanyDoceHandler(DocumentHandler):
    def __init__(self, type):
        super().__init__("company",type, "company")
