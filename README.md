# Portfolio Project

This project contains a portfolio website with both frontend and backend components.

## Project Structure

```
portfolio/
├── frontend/          # Next.js frontend application
│   ├── src/          # Next.js source code
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
├── backend/          # Python Flask backend
│   ├── app.py        # Flask application
│   ├── firebase_setup.py  # Firebase configuration
│   ├── requirements.txt   # Python dependencies
│   └── serviceAccountKey.json  # Firebase credentials
└── venv/             # Python virtual environment
```

## Getting Started

### Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```
Visit http://localhost:3000

### Backend (Flask)
```bash
cd backend
source ../venv/bin/activate
pip install -r requirements.txt
python app.py
```
Visit http://localhost:5000

### Firebase Setup
```bash
cd backend
python firebase_setup.py
```

## Features
- Portfolio website with resume, research papers, and links
- Resume enhancement tool
- Firebase integration for data storage
- Education dropdown with options (Bachelors, Masters, Doctors, PhD)
