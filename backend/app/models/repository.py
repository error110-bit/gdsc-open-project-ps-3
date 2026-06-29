from pydantic import BaseModel


class RepositoryRequest(BaseModel):
    path: str
