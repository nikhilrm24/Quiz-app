🧠 Quiz App

A full-stack quiz application built with React, Node.js, Express.js, and PostgreSQL. Users can take quizzes, select answers, receive instant feedback, and view their final score. An admin panel allows administrators to manage quiz questions through CRUD operations.

🚀 Features

👤 User Features

- 🏠 Modern quiz home page
- 🧠 Take quiz questions
- 🔘 Multiple-choice answers
- ✅ Correct answer feedback
- ❌ Wrong answer feedback
- 🏆 Score calculation
- 🎉 Quiz completion/result screen
- 🔄 Restart quiz
- 📱 Responsive UI

🔐 Admin Features

- 🔑 Admin login
- 🛡️ Protected admin page
- ➕ Add quiz questions
- ✏️ Edit existing questions
- 🗑️ Delete questions
- 📋 View all questions
- 🚪 Admin logout
- ⚠️ Delete confirmation

🛠️ Technologies Used

Frontend

- React
- JavaScript
- React Router DOM
- Tailwind CSS
- Vite
- HTML5
- CSS3

Backend

- Node.js
- Express.js
- REST API

Database

- PostgreSQL

Development Tools

- Git
- GitHub
- VS Code
- npm

📂 Project Structure

quiz-app/
│
├── frontend/
│   ├── public/
│   │   └── images/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── AdminQuestion.jsx
│   │   │   ├── Home.jsx
│   │   │   └── QuestionCard.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── db/
│   ├── server.js
│   └── package.json
│
└── README.md

🔄 Application Flow

                    ┌─────────────┐
                    │    Home     │
                    └──────┬──────┘
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
        ┌───────────┐             ┌───────────┐
        │   Quiz    │             │   Admin   │
        └─────┬─────┘             └─────┬─────┘
              │                         │
              ↓                         ↓
       Answer Questions           Admin Login
              │                         │
              ↓                         ↓
        Check Answers            Admin Dashboard
              │                         │
              ↓                 ┌───────┼────────┐
         Calculate Score        ↓       ↓        ↓
              │               Add     Edit     Delete
              ↓
       Result / Score
              │
              ↓
         Restart Quiz

🧩 Core Modules

1. Home Module

Provides the main landing page of the application with navigation to the quiz and admin section.

2. Quiz Module

Fetches questions from the backend and displays multiple-choice questions to the user.

3. Answer Checking

The selected answer is compared with the correct answer and the user receives immediate feedback.

4. Result Module

After completing the quiz, the application displays the user's score and provides an option to restart the quiz.

5. Admin Authentication

The admin must log in before accessing the question management section.

6. Question Management

Administrators can:

- Create questions
- Read/view questions
- Update questions
- Delete questions

This provides complete CRUD functionality for quiz questions.

🔌 API

The frontend communicates with the Express backend using REST APIs.

Example endpoints:

GET     /api/questions
POST    /api/questions
PUT     /api/questions/:id
DELETE  /api/questions/:id

🗄️ Database

The application uses PostgreSQL to store quiz questions.

A question contains information such as:

id
question
option1
option2
option3
option4
correct_answer

⚙️ Installation

1. Clone the repository

git clone <your-github-repository-url>

2. Navigate to the project

cd quiz-app

3. Install frontend dependencies

cd frontend
npm install

4. Install backend dependencies

cd ../backend
npm install

5. Configure PostgreSQL

Create a PostgreSQL database and configure your database connection in the backend environment variables.

Example:

DB_HOST=localhost
DB_PORT=5432
DB_NAME=quiz_db
DB_USER=postgres
DB_PASSWORD=your_password

6. Start the backend

npm run dev

7. Start the frontend

Open another terminal:

cd frontend
npm run dev

The application will then be available through the Vite development server.

🎨 UI

The application uses Tailwind CSS for styling and includes:

- Responsive layouts
- Modern cards
- Hover effects
- Responsive quiz options
- Styled admin dashboard
- Result screen
- Responsive navigation

🔒 Authentication

The project currently includes admin authentication and protected admin navigation.

«For production deployment, authentication should be upgraded to a backend-based authentication system using secure password hashing and sessions or JWT.»

📱 Responsive Design

The UI is designed to work across:

- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

Tailwind responsive utilities are used to adapt layouts to different screen sizes.

📸 Screenshots

Add screenshots of your application here:

Home Page
Quiz Page
Result Page
Admin Login
Admin Dashboard

🔮 Future Improvements

Possible future enhancements:

- 👤 User accounts
- 🏆 Leaderboard
- ⏱️ Quiz timer
- 📊 Quiz history
- 🎯 Categories and difficulty levels
- 🔐 JWT authentication
- 🔑 Secure password hashing
- 🌐 Deployment
- 📈 Admin analytics dashboard
- 🎲 Randomized questions
- 🔀 Randomized answer options

📚 What This Project Demonstrates

This project demonstrates practical knowledge of:

- React component development
- React state management
- React Router
- REST API integration
- CRUD operations
- Node.js backend development
- Express.js
- PostgreSQL
- Database integration
- Admin authentication
- Tailwind CSS
- Responsive web design
- Git and GitHub

👨‍💻 Author

Nikhil R M

Information Science Student

Built as a full-stack web development project using the React + Node.js + Express.js + PostgreSQL stack.

⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.