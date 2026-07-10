import express from "express";
import productRoutes from "./routes/product.routes.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";
import jwt from "jsonwebtoken";
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(logger);
app.get("/api/test-token", (req, res) => {
  const token = jwt.sign(
    {
      id: 1,
      email: "yousseffaddoul52@gmail.com",
      role: "admin",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );

  res.json({ token });
});

app.use("/api/products", productRoutes);

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.use(errorHandler);

export default app;