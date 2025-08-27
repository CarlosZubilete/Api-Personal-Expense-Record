import app from "./app.js";
import config from "./config/index.js";
import { connectDB } from "./config/db.js";

const start = async () => {
  try {
    await connectDB();
    app.listen(config.port, () => {
      console.log(`Server listening http://localhost:${config.port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

start();

// const port = config.port;
// app.listen(port, () => {
//   console.log(`Server listening http://localhost:${port}`);
// });
