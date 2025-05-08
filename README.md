# Kidney Disease Prediction System

A web application that predicts kidney disease risk using machine learning and displays nearby hospitals for treatment.

## Features

- **Disease Prediction**: Machine learning model to assess kidney disease risk based on health parameters
- **Hospital Locator**: Interactive map showing nearby kidney treatment centers
- **Admin Panel**: For managing hospital data and prediction models
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Frontend
- React.js
- Leaflet/Mapbox for maps
- Axios for API calls
- Bootstrap/Tailwind for styling

### Backend
- Python Flask/FastAPI
- Scikit-learn/TensorFlow for ML model
- Pandas for data processing

### Deployment
- AWS (Elastic Beanstalk/EC2 for backend, S3/Amplify for frontend) - not done

## Project Structure

PROJECT_FINAL/

├── back/ # Backend code

│ ├── static/ # Static files

│ ├── venv/ # Python virtual environment

│ ├── app.py # Flask/FastAPI application

│ ├── model.h5 # Trained ML model

│ ├── model.pkl # Serialized model

│ └── requirements.txt # Python dependencies

│

├── front/ # Frontend code

│ ├── node_modules/ # NPM packages

│ ├── src/

│ │ ├── assets/ # Images and logos

│ │ ├── components/ # React components

│ │ ├── pages/ # Page components

│ │ └── styles/ # CSS files

│ └── package.json # Frontend dependencies

└── README.md # This file



## Setup Instructions

### Backend Setup

Create virtual environment:

python -m venv venv
source venv/bin/activate
On Windows use `venv\Scripts\activate`
   
Install dependencies:


pip install -r requirements.txt
Run the server:


python app.py
Frontend Setup
Install Node.js dependencies:


cd front
npm install
Start development server:


npm start


**API Endpoints**

POST /predict - Submit health parameters for prediction

GET /hospitals - Retrieve list of kidney treatment centers

POST /admin/update-model - Update ML model (admin only)

**Contributors**

Tejas Gophane

Vedant Pawar

Sakshi Aher

Swarup Divekar

**Guided By :**

**Anita Shingade Mam**

