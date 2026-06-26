from fastapi import APIRouter, HTTPException
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from models import ContactForm
from dotenv import load_dotenv
import os

load_dotenv()
print("MAIL_USERNAME:", os.getenv("MAIL_USERNAME"))
print("MAIL_FROM:", os.getenv("MAIL_FROM"))
print("MAIL_PASSWORD:", os.getenv("MAIL_PASSWORD"))
router = APIRouter(prefix="/api/contact", tags=["Contact"])

conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=int(os.getenv("MAIL_PORT")),
    MAIL_SERVER=os.getenv("MAIL_SERVER"),
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
)

@router.post("/")
async def send_message(form: ContactForm):
    try:
        message = MessageSchema(
            subject=f"Portfolio Contact: {form.subject}",
            recipients=[os.getenv("MAIL_FROM")],
            body=f"Name: {form.name}\nEmail: {form.email}\n\nMessage:\n{form.message}",
            subtype="plain"
        )
        fm = FastMail(conf)
        await fm.send_message(message)
        return {"status": "success", "message": "Email sent successfully"}
    except Exception as e:
        print(f"MAIL ERROR: {type(e).__name__}: {e}")  # add this
        raise HTTPException(status_code=500, detail=str(e))