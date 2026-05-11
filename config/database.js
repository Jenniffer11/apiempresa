const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.warn("MONGODB_URI no esta definida. La API iniciara sin conexion a MongoDB.");
    return;
  }

  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 3000,
    });
    console.log("MongoDB conectada correctamente");
  } catch (error) {
    console.error("No se pudo conectar a MongoDB:", error.message);
  }
};

module.exports = connectDB;
