const jwt = require("jsonwebtoken");

const generateAccessToken = ({ userId, role, secret, expiresIn }) => {
  if (!secret) {
    throw new Error("JWT access secret is not configured");
  }

  return jwt.sign(
    {
      role,
    },
    secret,
    {
      subject: userId.toString(),
      expiresIn,
    }
  );
};

module.exports = {
  generateAccessToken,
};