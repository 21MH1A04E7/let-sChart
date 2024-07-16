import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

export const verifyToken = async(req, res, next) => {
    // return res.status(400).json({message:'message'})
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({ error: true, success: false, message: "Token is not provided" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: true, message: "Token is not valid", success: false });
    }
    req.user = decoded;
    next();
  });
};
