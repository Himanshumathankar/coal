# Carbon Tracker Web Application

## Overview

The Carbon Tracker web application is designed specifically for Indian coal mines to quantify their carbon footprint and explore pathways to carbon neutrality. The application provides tools for emission estimation, carbon neutrality pathways, and data visualization, aimed at aiding Indian coal mines in their journey towards sustainability.

## Tech Stack

- **Frontend:**
  - React: For building the user interface.
  - Firebase: For user authentication (login and signup).
  
- **Backend:**
  - Django: For handling server-side logic and API creation.
  - PostgreSQL: For data storage and management.

## Project Structure

```plaintext
carbon-tracker/
│
├── frontend/                        # React frontend application
│   ├── public/                      # Public assets
│   ├── src/                         # Source files for React application
│   │   ├── components/              # Reusable components
│   │   ├── pages/                   # Page components
│   │   ├── styles/                  # CSS files
│   │   ├── App.js                   # Main application component
│   │   └── index.js                 # Entry point for React application
│   ├── package.json                  # NPM package configuration
│   └── README.md                    # Frontend documentation
│
├── backend/                         # Django backend application
│   ├── carbon_tracker/              # Django project directory
│   │   ├── settings.py              # Project settings
│   │   ├── urls.py                  # URL routing
│   │   └── wsgi.py                  # WSGI entry point
│   ├── api/                         # API application for handling requests
│   │   ├── migrations/               # Database migrations
│   │   ├── models.py                 # Database models
│   │   ├── views.py                  # Views for handling API logic
│   │   └── urls.py                   # API routing
│   ├── manage.py                     # Django management script
│   ├── requirements.txt              # Python package dependencies
│   └── README.md                     # Backend documentation
│
└── .gitignore                       # Git ignore file


Purpose of the Project
Emission Estimation:

The application will allow users to input data on various mining activities to estimate the associated carbon emissions.
Carbon Neutrality Pathways:

Users can explore different strategies such as adopting clean technologies and afforestation to offset emissions.
Data Visualization:

The app will visually present emission trends and the effectiveness of implemented strategies through charts and graphs.
User Management:

Firebase will manage user authentication for a secure login and signup process.
Getting Started
Frontend:

Navigate to the frontend directory and run npm install to install dependencies.
Use npm start to run the React application.
Backend:

Navigate to the backend directory and run pip install -r requirements.txt to install Python dependencies.
Set up PostgreSQL database and update settings.py with database credentials.
Run python manage.py migrate to apply migrations.
Use python manage.py runserver to start the Django server.
Contributing
We welcome contributions! Please feel free to submit issues or pull requests.