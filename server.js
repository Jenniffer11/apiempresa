require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/database");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, HOST, () => {
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
  });
};

startServer();
