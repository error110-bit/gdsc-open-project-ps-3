from pydantic import BaseModel


class RepositoryRequest(BaseModel):
    path: str
    max_files: int = 100
    ignore_migrations: bool = True
    ignore_tests: bool = True