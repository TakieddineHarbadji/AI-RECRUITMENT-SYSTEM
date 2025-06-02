from Manage_Db.Database.Handler import (
    BaseHandler,CandidatesHandler,CompaniesHandler,UserNotifHandler,
    SupportHandler, TestimonialsHandler, BlogsHandler, CompanyNotifHandler,
    AdditionalInfoUsersHandler, AdditionalInfoCompaniesHandler, ApplicationsHandler, JobHandler,
    UsersCompaniesHandler
    )

from fastapi import HTTPException

def handler_factory(table_name: str, child_table = None) -> BaseHandler:
    """ Factory function to return the correct handler based on the table name """

    if table_name == "Candidate":
        return CandidatesHandler(child_table)
    elif table_name == "Company":
        return CompaniesHandler(child_table)
    elif table_name == "Support":
        return SupportHandler()
    elif table_name == "Testimonials":
        return TestimonialsHandler()
    elif table_name == "Blogs":
        return BlogsHandler()

    #------

    elif table_name == "Notifications_Users":
        return UserNotifHandler()
    elif table_name == "Notifications_Companies":
        return CompanyNotifHandler()
    elif table_name == "Additional_Info_Users":
        return AdditionalInfoUsersHandler()
    elif table_name == "Additional_Info_Companies":
        return AdditionalInfoCompaniesHandler()
    
    elif table_name == "Applications":
        return ApplicationsHandler()
    elif table_name == "Job":
        return JobHandler()
    elif table_name == "Users_Companies":
        return UsersCompaniesHandler()
    
    #-----

    else:
        raise HTTPException(status_code=404, detail="Handler not found for this table")

