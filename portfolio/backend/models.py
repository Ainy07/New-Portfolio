from pydantic import BaseModel, EmailStr

from typing import Optional, List

class Project(BaseModel):
    id: int
    title: str
    description: str
    tech_stack: List[str]
    github_link: str
    frontend_link: Optional[str] = None
    backend_link: Optional[str] = None
    demo_link: Optional[str] = None
    category: str
    images: List[str] = []

class Skill(BaseModel):
    name: str
    percentage: int

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str