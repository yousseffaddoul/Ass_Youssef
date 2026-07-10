import jwt from "jsonwebtoken";

export default function auth(req, res, next) {

  console.log("=== AUTH CHECK ===");
  console.log("Header:", req.headers.authorization);
  console.log("JWT_SECRET =", process.env.JWT_SECRET);

  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Please sign in.",
    });
  }

  const token = header.split(" ")[1];
  console.log("VERIFY SECRET:", process.env.JWT_SECRET);
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("Decoded:", decoded);

    req.user = decoded;

    next();

  } catch (error) {
    console.log("JWT ERROR:", error.message);

    return res.status(401).json({
      success: false,
      message: "Please sign in.",
    });
  }
 
}