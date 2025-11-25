require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:3000',
  'https://linkedin-mini-frontend-linkedin.onrender.com',
].filter(Boolean); // Remove undefined/null values

// In development allow the Vite default origin (localhost:5173)
if (process.env.NODE_ENV !== 'production') {
  allowedOrigins.push('http://localhost:5173');
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., mobile apps, curl) or allowed origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error('❌ CORS blocked origin:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

app.use(express.json({ extended: false }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`❄️  Server started on port ${PORT}`));

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Allowed origins
// const allowedOrigins = [
//   process.env.CLIENT_URL, // from .env
//   'http://localhost:3000',
// ].filter(Boolean);

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       console.log("❌ CORS blocked origin:", origin);
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// };

// // Middleware
// app.use(cors(corsOptions));
// app.use(express.json());

// // Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/posts', require('./routes/posts'));
// app.use('/api/users', require('./routes/users'));

// // Root route
// app.get('/', (req, res) => {
//   res.send('✅ Backend is running...');
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`❄️ Server started on port ${PORT}`));
