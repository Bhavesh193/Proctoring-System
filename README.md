
---

### Online Proctoring System

```markdown
# 🎓 Online Proctoring System

A MERN Stack-based Online Proctoring System designed to securely monitor and evaluate students during online exams. It ensures academic integrity by using real-time webcam access, face detection, and activity tracking.

---

## 🚀 Features

- 👨‍💻 Student authentication and login
- 📷 Live webcam monitoring
- 🧠 Face detection to prevent impersonation
- 🖥️ Screen activity tracking (if implemented)
- 📊 Exam management panel for instructors
- 🗃️ Real-time data capture and storage
- 🔒 Secure backend with JWT authentication

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Tailwind CSS / Bootstrap (as used)
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token) for authentication
- Multer (for image/video uploads if applicable)

---


```

```
## 📂 Folder Structure

online-proctoring-system/
├── client/             # React frontend
│   ├── src/
│   └── public/
├── server/             # Node backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
├── .env
├── package.json
└── README.md
```
````

---

## 📸 Screenshots

Add screenshots here (e.g., login screen, webcam detection view, exam interface)

---

## 🔧 Installation

1. Clone the repository
```bash
git clone https://github.com/Bhavesh193/Proctoring-System.git
cd online-proctoring-system
````

2. Setup Backend

```bash
cd server
npm install
npm run start
```

3. Setup Frontend

```bash
cd client
npm install
npm start
```

4. Environment Variables

Create `.env` in `server/` and add:

```env
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
```

---

## ✍️ Author

Bhavesh Choudhary
🎓 B.E. Computer Engineering
🔗 [LinkedIn](https://www.linkedin.com/in/bhaveshchoudhary2001/) | 🐙 [GitHub](https://github.com/Bhavesh193)

