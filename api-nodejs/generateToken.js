import "dotenv/config";
import jwt from "jsonwebtoken";

console.log("SECRET:", process.env.JWT_SECRET);

const token = jwt.sign(
  {
    id: 1,
    email: "yousseffaddoul52@gmail.com",
    role: "admin"
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "24h",
  }
);

console.log(token);