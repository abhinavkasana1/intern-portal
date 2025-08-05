# Intern Portal Assignment

### A full-stack intern portal built with React and Node.js.

## 🚀 Project Overview

The application is designed to simulate a simple dashboard for an intern. It uses a React frontend to display key information such as the intern's name, a dummy referral code, and their total donations raised. This data is dynamically fetched from a simple REST API built with Node.js and Express.

This project showcases fundamental full-stack development skills, including API design, data fetching, and component-based UI development.

---

## ✨ Features

* **Dummy Login Page:** A non-authenticated login page to initiate the user flow.
* **Intern Dashboard:** Displays intern-specific data fetched from the backend.
    * Intern's Name and Dummy Referral Code.
    * Total Donations Raised (a static number from the backend).
    * A "Rewards/Unlockables" section (static display).
* **Backend API:** A RESTful API built with Node.js and Express to serve static JSON data.
* **Full-Stack Architecture:** The frontend (React) communicates with the backend (Node.js) to retrieve data, demonstrating a complete full-stack application.

---

## 🛠️ Technologies Used

### Frontend
* **React:** A JavaScript library for building dynamic user interfaces.
* **React Router DOM:** Used for client-side routing to navigate between the login and dashboard pages.
* **HTML, CSS, JavaScript:** The core building blocks for the web interface.

### Backend
* **Node.js & Express.js:** Used to create the lightweight backend server and API.
* **CORS:** Middleware to handle and allow cross-origin requests from the React frontend.

---

## 🏃 Getting Started

### Prerequisites
To run this project, you must have Node.js and npm installed on your machine.

### Installation and Setup
Follow these steps to set up and run the project locally.

#### 1. Clone the Repository
First, clone this repository to your local machine.

```bash
git clone [https://github.com/abhinavkasana1/intern-portal.git](https://github.com/abhinavkasana1/intern-portal.git)
cd intern-portal
````

#### 2\. Backend Setup

Open a terminal, navigate to the `backend` directory, install the dependencies, and start the server.

```bash
cd backend
npm install
node server.js
```

The backend API will be running on `http://localhost:3001`. Leave this terminal running.

#### 3\. Frontend Setup

Open a **new** terminal, navigate to the `frontend` directory, install dependencies, and start the development server.

```bash
cd ../frontend
npm install
npm start
```

The frontend application will automatically open in your default browser at `http://localhost:3000`.

-----

## 💡 How to Use

1.  The application will initially load on a dummy login page.
2.  Enter any credentials and click "Login."
3.  You will be redirected to the dashboard, which will display the data fetched from the backend.

-----

## 📸 Screenshots

![login page](https://github.com/abhinavkasana1/intern-portal/blob/main/Screenshot1.png?raw=true)
![dashboard](https://github.com/abhinavkasana1/intern-portal/blob/main/Screenshot%202.png?raw=true)

## 🧑‍💻 Author

  * **Abhinav Kasana**

-----

```
```
