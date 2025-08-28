// import jwt from "jsonwebtoken";
// import config from "../config/index.js";

// export default function authMiddleware(req, res, next) {
//   const authHeader = req.headers.authorization;
//   if (!authHeader)
//     return res.status(401).json({ ok: false, message: "No token" });

//   const token = authHeader.split(" ")[1]; // "Bearer <token>"
//   try {
//     const payload = jwt.verify(token, config.jwtSecret);
//     req.user = payload; //  sub, username, role...
//     next();
//   } catch (err) {
//     return res.status(401).json({ ok: false, message: "Invalid token" });
//   }
// }

/*
import authMiddleware from "./middlewares/authMiddleware.js";
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ ok: true, user: req.user });
});

*/
