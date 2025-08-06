# 🌐 Mini LinkedIn – A MERN Stack Social Network -https://linkedin-mini-frontend-linkedin.onrender.com

**Mini LinkedIn** is a sleek, mobile-responsive social media platform inspired by LinkedIn.  
Built with the **MERN** stack, it supports:

- 🔐 User authentication  
- 🙋 Profile pages  
- 📝 Post creation  
- ❤️ Likes & 💬 comments

---

## 🚀 Tech Stack Used

### 💻 Frontend

- ⚛️ React.js  
- 🎨 Tailwind CSS  
- 🔁 React Router DOM  
- 📡 Axios  
- 🕒 Moment.js  

### 🛠️ Backend

- 🟢 Node.js  
- 🚂 Express.js  
- 🍃 MongoDB (Mongoose)  
- 🔐 JWT (JSON Web Token) for authentication

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/tejas-waghamare/LinkedIn-Mini.git
cd LinkedIn-Mini


2️⃣ Backend Setup

bash:
cd backend
pnpm install
Create a .env file inside the backend folder with the following content:

.env->

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret

PORT=5000

CLIENT_URL=http://localhost:5173

Then run the backend server:

bash:

pnpm run ddv
Server will run at: http://localhost:5000

3️⃣ Frontend Setup
bash:

cd ../frontend
pnpm install
pnpm run dev




