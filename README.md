
---

### Online Proctoring System

```markdown
# 🎓 Online Proctoring System

A MERN Stack-based Online Proctoring System designed to securely monitor and evaluate students during online exams. It ensures academic integrity by using real-time webcam access, face detection, and activity tracking.

---

### 🚀 Proctoring Features
👥 Multiple Face Detection
Detects if more than one person appears in the webcam frame.

🔄 Tab Switching Detection
Tracks if the user switches tabs or minimizes the browser window.

👀 Eye Movement Tracking
Monitors if the user repeatedly looks away from the screen.

✋ Hand Movement Detection
Detects frequent or suspicious hand gestures near the face.

🗣️ Voice Recognition / Sound Detection
Detects if unexpected voices are heard during the exam.

🧍‍♂️ Face Movement Tracking
Alerts if the user frequently moves out of the camera frame.

📦 Object Detection
Detects presence of mobile phones, books, or any unauthorized items.

📱 Mobile Detection
Identifies if a mobile phone is being used during the exam.

⚠️ Warning System
Gives up to 3 warnings for suspicious activity.
On the 4th violation, the exam is automatically terminated.

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

## 🙏 Special Thanks

A heartfelt thanks to my amazing group members **Prajukta Podili** and **Kajal Dhumal** for their wonderful support, ideas, and contributions throughout the development of this Online Proctoring System.

Your teamwork, dedication, and effort made this project a success. 💻🎉

## ✍️ Author

Bhavesh Choudhary
🎓 B.E. Computer Engineering
🔗 [LinkedIn](https://www.linkedin.com/in/bhaveshchoudhary2001/) | 🐙 [GitHub](https://github.com/Bhavesh193)

