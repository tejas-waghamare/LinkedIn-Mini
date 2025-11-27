const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-admin-token");

  if (!token) {
    return res.status(401).json({ msg: "No admin token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded.admin;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Admin token is not valid" });
  }
};
