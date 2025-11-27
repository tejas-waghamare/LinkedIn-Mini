require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI);

(async () => {
  const existing = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
  if (existing) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

  await Admin.create({
    email: process.env.ADMIN_EMAIL,
    password: hashedPassword
  });

  console.log("✅ Admin created securely");
  process.exit();
})();
