# 🚀 Personal Portfolio Website

A full-stack developer portfolio built with **React (Vite)** on the frontend and **FastAPI** on the backend — featuring smooth navigation, live project showcases, and a working contact form with email integration.

---

## ✨ Features

- 🏠 **Hero Section** — Introduction with call-to-action
- 👤 **About** — Personal summary and background
- 📊 **Skills** — Tech stack with visual indicators
- 💼 **Experience** — Work history and roles
- 🖼️ **Projects** — Filterable project cards with image slider, GitHub links, live demo & API doc links
- 🎓 **Education** — Academic background
- ✉️ **Contact** — Working contact form powered by FastAPI-Mail (Gmail SMTP)
- 🎨 **Accent Color Picker** — Dynamic theme customization
- 🔗 **GitHub & LinkedIn** integration

---

## 🛠️ Tech Stack

### Frontend
| Tech | Usage |
|------|-------|
| React 18 | UI Framework |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| React Icons | Icon Library |

### Backend
| Tech | Usage |
|------|-------|
| FastAPI | REST API |
| FastAPI-Mail | Email via Gmail SMTP |
| Uvicorn | ASGI Server |
| Python Dotenv | Environment Variables |

---

## 📁 Project Structure

```
portfolio/
├── frontend/               # React + Vite app
│   ├── src/
│   │   ├── components/     # Hero, About, Skills, Projects, Contact...
│   │   ├── services/       # api.js (axios calls)
│   │   └── App.jsx
│   └── package.json
│
└── backend/                # FastAPI app
    ├── main.py
    ├── models.py
    ├── routes/
    │   ├── projects.py
    │   └── contact.py
    ├── .env
    └── requirements.txt
```

---

## ⚙️ Local Setup

### Prerequisites
- Node.js >= 18
- Python >= 3.10
- Gmail account with App Password

---

### 1️⃣ Clone the repo

```bash
git clone https://github.com/ainy07/portfolio.git
cd portfolio
```

---

### 2️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Start the backend:

```bash
uvicorn main:app --reload
```

Backend runs at: `http://localhost:8000`

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` folder:

```dotenv
VITE_API_URL=http://localhost:8000
```

Start the frontend:

```bash
npm run dev
```

## 📬 Contact

**Ainy Gupta**
- 📧 ainygupta00@gmail.com
- 📍 Satna, India
- 🔗 [LinkedIn](https://www.linkedin.com/in/ainy-gupta-882917242/) 

---

> ⭐ If you liked this project, consider giving it a star on GitHub!