from Manage_Storage.Handler import DocumentHandler, UserDocHandler, CompanyDoceHandler

def doc_handler_factory(pre_link: str, type: str) -> DocumentHandler:
    if pre_link == "Users":
        return UserDocHandler(type)
    elif pre_link == "Companies":
        return CompanyDoceHandler(type)
    else:
        raise ValueError(f"Unknown pre_link: {pre_link}")
