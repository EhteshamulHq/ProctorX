const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      service: "ProctorX API",
      status: "healthy",
      environment: process.env.NODE_ENV || "development",
      timestamp: new Date().toISOString(),
    },
  });
};

module.exports = {
  getHealth,
};