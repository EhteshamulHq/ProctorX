const app = require("./app");
const env = require("./config/env");
const connectDatabase = require("./config/database");

const startServer = async () => {
  try {
    await connectDatabase(env.mongoUri);

    const server = app.listen(env.port, () => {
      console.log(
        `ProctorX API running on http://localhost:${env.port}`
      );
    });

    const shutdown = (signal) => {
      console.log(`${signal} received. Shutting down server...`);

      server.close(() => {
        console.log("Server closed.");
        process.exit(0);
      });
    };

    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  } catch (error) {
    console.error("Backend startup failed.");
    process.exit(1);
  }
};

startServer();