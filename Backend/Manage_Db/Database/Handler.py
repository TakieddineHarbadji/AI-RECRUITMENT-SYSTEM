from typing import List
from fastapi import HTTPException
from supabase import create_client, Client 

SUPABASE_URL = "https://avhrixisdjdyovzutxlx.supabase.co" 
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2aHJpeGlzZGpkeW92enV0eGx4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjU2NTMxMiwiZXhwIjoyMDYyMTQxMzEyfQ.jp444BtnwQ1uen2PMpCzsNGWEAZopbSFQnfqz0Etm1k" 
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

class BaseHandler:
    def __init__(self, table_name: str):
        self.table_name = table_name

    def get_all(self):
        """ Retrieve all records from the table """
        try:
            response = supabase.table(self.table_name).select("*").execute()
            return response.data
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
        
    def get_batch(self, start_index: int, batch_size: int):
        """Retrieve a batch of records from the table starting at start_index"""
        try:
            end_index = start_index + batch_size - 1
            response = supabase.table(self.table_name).select("*").range(start_index, end_index).execute()
            return response.data
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))


    def get_by_id(self, record_id: int):
        """ Retrieve a single record by ID """
        try:
            response = supabase.table(self.table_name).select("*").eq(f"{self.table_name.lower()}_id", record_id).execute()
            if not response.data:
                raise HTTPException(status_code=404, detail="Record not found")
            return response.data[0]
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
        
    
    def get_by_username(self, username: str):
        """ Retrieve a single record by Username """
        
        try:
            response = supabase.table(self.table_name).select("*").eq("username", username).execute()
            if not response.data:
                raise HTTPException(status_code=404, detail="Record not found")
            return response.data[0]
        except Exception as e:
            
            raise HTTPException(status_code=500, detail=str(e))
    def get_by_multi_id(self, record_id: List[int]):
        """ Retrieve a multiple record by IDs """
        try:
            response = supabase.table(self.table_name).select("*").in_(f"{self.table_name.lower()}_id", record_id).execute()
            if not response.data:
                raise HTTPException(status_code=404, detail="No records found for these user IDs")
            return response.data
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    def create(self, data: dict):
        """ Insert a new record into the table """
        try:
            response = supabase.table(self.table_name).insert(data).execute()
            return response.data
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    def update(self, record_id: int, data: dict):
        """ Update an existing record """
        try:
            response = supabase.table(self.table_name).update(data).eq(f"{self.table_name.lower()}_id", record_id).execute()
            if not response.data:
                raise HTTPException(status_code=404, detail="Record not found or no changes made")
            return response.data
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    def delete(self, record_id: int):
        """ Delete a record by ID """
        try:
            response = supabase.table(self.table_name).delete().eq(f"{self.table_name.lower()}_id", record_id).execute()
            if not response.data:
                raise HTTPException(status_code=404, detail="Record not found")
            return {"message": "Record deleted successfully"}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
        
class ForeignHandler:
    def __init__(self, parent_table: str, child_table: str):
        self.parent_table = parent_table
        self.child_table = child_table

    def get_by_foreign_key(self, parent_id: int):
        fk_column = f"{self.parent_table.lower()}_id"
        try:
            response = supabase.table(self.child_table).select("*").eq(fk_column, parent_id).execute()
            if not response.data:
                raise HTTPException(status_code=404, detail="No matching records found")
            return response.data
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
        
    def get_many_to_many(self, join_table: str, source_id: int, target_table: str, target_id:List[int]):
        try:
            join_res = supabase.table(join_table).select("*").eq(f"{self.parent_table.lower()}_id", source_id).execute()
            target_ids = [r[f"{self.child_table.lower()}_id"] for r in join_res.data] if len(target_id) == 0 else target_id
            if not target_ids:
                return []
            target_res = supabase.table(target_table).select("*").in_(f"{self.child_table.lower()}_id", target_ids).execute()
            return target_res.data
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
        
    def get_by_foreign_key_batch(self, parent_id: int, start_index: int, batch_size: int):
        fk_column = f"{self.parent_table.lower()}_id"
        try:
            end_index = start_index + batch_size - 1
            response = (
                supabase
                .table(self.child_table)
                .select("*")
                .eq(fk_column, parent_id)
                .range(start_index, end_index)
                .execute()
            )
            if not response.data:
                raise HTTPException(status_code=404, detail="No matching records found")
            return response.data
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

#--- Batch Versions
    def get_many_to_many_batch(self, join_table: str, source_id: int, target_table: str, start_index: int, batch_size: int):
        try:
            join_res = (
                supabase
                .table(join_table)
                .select("*")
                .eq(f"{self.parent_table.lower()}_id", source_id)
                .execute()
            )
            target_ids = [r[f"{self.child_table.lower()}_id"] for r in join_res.data]
            if not target_ids:
                return []

            # Slice the batch from the IDs before querying
            batch_ids = target_ids[start_index : start_index + batch_size]
            if not batch_ids:
                return []

            target_res = (
                supabase
                .table(target_table)
                .select("*")
                .in_(f"{self.child_table.lower()}_id", batch_ids)
                .execute()
            )
            return target_res.data
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))


#---------- Handlers:

class CandidatesHandler(BaseHandler, ForeignHandler):
    def __init__(self, child_table):
        BaseHandler.__init__(self, "Candidate")
        if child_table:
            ForeignHandler.__init__(self, "Candidate", child_table)

class CompaniesHandler(BaseHandler, ForeignHandler):
    def __init__(self, child_table):
        BaseHandler.__init__(self, "Companies")
        if child_table:
            ForeignHandler.__init__(self, "Companies", child_table) 

class SupportHandler(BaseHandler):
    def __init__(self):
        BaseHandler.__init__(self, "Support")

class TestimonialsHandler(BaseHandler):
    def __init__(self):
        BaseHandler.__init__(self, "Testimonials")

class BlogsHandler(BaseHandler):
    def __init__(self):
        BaseHandler.__init__(self, "Blogs")

#------

class UserNotifHandler(BaseHandler):
    def __init__(self):
        BaseHandler.__init__(self, "Notifications_Users")

class CompanyNotifHandler(BaseHandler):
    def __init__(self):
        BaseHandler.__init__(self, "Notifications_Companies")

class AdditionalInfoUsersHandler(BaseHandler):
    def __init__(self):
        BaseHandler.__init__(self, "Additional_Info_Users")

class AdditionalInfoCompaniesHandler(BaseHandler):
    def __init__(self):
        BaseHandler.__init__(self, "Additional_Info_Companies")

class ApplicationsHandler(BaseHandler):
    def __init__(self):
        BaseHandler.__init__(self, "Applications")

class JobHandler(BaseHandler):
    def __init__(self):
        BaseHandler.__init__(self, "Job")

class UsersCompaniesHandler(BaseHandler):
    def __init__(self):
        BaseHandler.__init__(self, "Users_Companies")