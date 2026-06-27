from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import projects, skills, contact

app = FastAPI(title="Ainy Gupta Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://new-portfolio-jwts.vercel.app",
        "https://new-portfolio-jwts-git-main-ainy-guptas-projects.vercel.app",
        "https://new-portfolio-jwts-jzwqsioc5-ainy-guptas-projects.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)
app.include_router(skills.router)
app.include_router(contact.router)

@app.get("/")
def root():
    return {"message": "Ainy Gupta Portfolio API is running"}