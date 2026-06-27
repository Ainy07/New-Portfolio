# router.py
from fastapi import APIRouter
from models import Project

router = APIRouter(prefix="/api/projects", tags=["Projects"])

projects_data = [
    Project(
        id=1,
        title="HRMS-Lite – Full-Stack HR Management System",
        description="HRMS Lite is a lightweight Human Resource Management System for managing employees, attendance, and core HR operations through a clean interface with scalable backend APIs.",
        tech_stack=["React (Vite)", "FastAPI", "MongoDB", "Axios","Vercel V0"],
        github_link="https://github.com/ainy07/hrms-lite",
        frontend_link="https://hrms-lite-6lxp.vercel.app",
        backend_link="https://hrms-lite-production-fa7e.up.railway.app/docs",
        demo_link=None,
        category="web-development",
        images=["/projects/hrms-1.png", "/projects/hrms-2.png","/projects/hrms-3.png","/projects/hrms-4.png"],
    ),
        Project(
        id=2,
        title="E-Commerce Website",
        description="Developed a full-featured e-commerce web application using Django with secure user authentication, customer registration, profile and address management, password reset/change functionality, product browsing, shopping cart, order placement, and responsive UI. Implemented complete shopping workflows including home, product, cart, checkout, and order management pages.",
        tech_stack=[
            "Django",
            "DRF",
            "SQLite",
            "Bootstrap",
            "JavaScript"
        ],
        github_link="https://github.com/Ainy07/shopping",
        frontend_link=None,
        backend_link=None,
        demo_link=None,
        category="e-commerce",
        images=[
            "/projects/shopping-1.png",
            "/projects/shopping-2.png",
            "/projects/shopping-3.png",
            "/projects/shopping-4.png",
            "/projects/shopping-5.png",
        ],
    ),
    Project(
        id=3,
        title="Smart Personal Dashboard API",
        description="A secure and scalable FastAPI-based backend system featuring JWT authentication, expense tracking, weather and news integration, sentiment analysis, notifications, calendar management, contact handling, and an admin dashboard. Built with API security, rate limiting, scheduled tasks, and production-ready architecture.",
        tech_stack=[
            "Python",
            "FastAPI",
            "JWT",
            "SQLAlchemy",
            "SQLite",
            "Docker",
            "SlowAPI",
            "APScheduler",
            "REST API",
            "Swagger",
            "TextBlob"
        ],
        github_link="https://github.com/ainy07/Smart-Personal-Dashboard-API",
        frontend_link=None,
        backend_link=None,
        demo_link=None,
        category="backend",
        images=["/projects/smartdashboard-1.png", "/projects/smartdashboard-2.png"],
    ),
    Project(
        id=4,
        title="Task Management Application",
        description="Developed a full-stack Task Management Application using Django and Django REST Framework with CRUD functionality for creating, updating, viewing, and deleting tasks. Implemented RESTful APIs, responsive UI using HTML, CSS, and JavaScript, and SQLite database integration for efficient task management.",
        tech_stack=[
            "Python",
            "Django",
            "Django REST Framework",
            "SQLite"
        ],
        github_link="https://github.com/Ainy07/Task_Management_Application",
        frontend_link=None,
        backend_link=None,
        demo_link=None,
        category="backend",
        images=["/projects/Taskmanagement-1.png", "/projects/Taskmanagement-2.png","/projects/Taskmanagement-3.png"],
    ),
        Project(
            id=5,
            title="Flask News Application",
            description="Built a Flask-based news web application that integrates with the NewsAPI to fetch and display real-time news articles from multiple sources. Implemented category-based news retrieval, API integration, and a responsive user interface using HTML, CSS, and Flask templates.",
            tech_stack=[
                "Python",
                "Flask",
                "NewsAPI",
            ],
            github_link="https://github.com/Ainy07/Flask-NEWS-Application-in-Newsapi",
            frontend_link=None,
            backend_link=None,
            demo_link=None,
            category="web-development",
            images=["/projects/flasknewsapi-1.png", "/projects/flasknewsapi-2.png"],
        ),
            Project(
                id=6,
                title="GST Billing Application",
                description="Developed a GST Billing Application using Django to simplify invoice generation, inventory management, and financial record tracking. Implemented customer and product management, GST-based invoice creation, billing workflows, and SQLite database integration for efficient business operations.",
                tech_stack=[
                    "Python",
                    "Django",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Bootstrap",
                    "SQLite"
                ],
                github_link="https://github.com/Ainy07/GST-billing-app-in-django",
                frontend_link=None,
                backend_link=None,
                demo_link=None,
                category="web-development",
                images=["/projects/gstinvoice-1.png", "/projects/gstinvoice-2.png","/projects/gstinvoice-3.png","/projects/gstinvoice-4.png","/projects/gstinvoice-5.png","/projects/gstinvoice-6.png"],
            ),
]

@router.get("", response_model=list[Project])
def get_projects():
    return projects_data

@router.get("/{project_id}", response_model=Project)
def get_project(project_id: int):
    for p in projects_data:
        if p.id == project_id:
            return p
    return {"error": "Project not found"}