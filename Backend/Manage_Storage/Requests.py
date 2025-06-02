from Manage_Storage.Factory import doc_handler_factory
from fastapi import FastAPI, File, HTTPException, UploadFile

app = FastAPI() 
 
@app.get("/{pre_link}/{type}/{id}/")
async def get_image(pre_link: str,type: str, id: int):
    try:
        handler = doc_handler_factory(pre_link, type)
        return handler.get_doc(id)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/{pre_link}/{type}/{id}/upload/")
async def upload_image(pre_link: str,type: str, id: int, file: UploadFile = File(...)):
    try:
        handler = doc_handler_factory(pre_link, type)
        response = await handler.upload_doc(id, file)
        return response
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    
@app.put("/{pre_link}/{type}/{id}/upload/{doc_num}")
async def replace_image(pre_link: str,type: str, id: int, doc_num: int, file: UploadFile = File(...)):
    try:
        handler = doc_handler_factory(pre_link, type)
        response = await handler.replace_doc(id, doc_num,file)
        return response
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.delete("/{pre_link}/{type}/{id}/delete/{doc_num}")
def delete_image(pre_link: str,type: str, id: int, doc_num: int = 0):
    try:
        handler = doc_handler_factory(pre_link, type)
        return handler.delete_doc(id, doc_num)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))