
from fastapi import APIRouter
from models import Skill

router = APIRouter(prefix="/api/skills", tags=["Skills"])

skills_data = [
    Skill(name="Python", percentage=90),
    Skill(name="Django", percentage=85),
    Skill(name="FastAPI", percentage=80),
    Skill(name="REST APIs", percentage=90),
    Skill(name="MySQL/PostgreSQL", percentage=80),
    Skill(name="MongoDB", percentage=75),
    Skill(name="AWS", percentage=70),
    Skill(name="Docker", percentage=70),
    Skill(name="React (Basic)", percentage=60),
    Skill(name="Redis", percentage=75),
]

@router.get("/", response_model=list[Skill])
def get_skills():
    return skills_data