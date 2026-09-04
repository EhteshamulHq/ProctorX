const { registerUser } = require("../services/auth.service");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      !password
    ) {
      const error = new Error(
        "Name, email, and password are required"
      );
      error.statusCode = 400;
      throw error;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      const error = new Error("Invalid email address");
      error.statusCode = 400;
      throw error;
    }

    if (password.length < 8) {
      const error = new Error(
        "Password must be at least 8 characters long"
      );
      error.statusCode = 400;
      throw error;
    }

    const user = await registerUser({
      name,
      email,
      password,
    });

    return res.status(201).json({
      success: true,
      data: {
        user,
      },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  register,
};