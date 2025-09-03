import jwt from "jsonwebtoken";
import config from "../../../config/index.js";
// import Token from "../models/auth.model.token.js";
import * as tokenService from "../services/token.service.js";
import User from "../models/auth.model.user.js";
import { userSchemaValidator } from "../validators/validador.model.user.js";
import { loginSchemaValidator } from "../validators/validator.model.login.js";

export const validateUser = async (req, res, next) => {
  const { username, password, email, name } = req.body;

  // validated with inputs or body from frond whitJoi, also we can those:  Yup, Zod.
  const { error } = userSchemaValidator.validate(
    { username, password, email, name },
    { abortEarly: false }
  );

  if (error)
    return res.status(400).json({
      ok: false,
      errors: error.details.map((detail) => detail.message),
    });

  // check if exists in the database.
  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser)
    return res.status(409).json({
      ok: false,
      message: `User with this ${
        existingUser.username === username ? "username" : "email"
      } already exists`,
    });

  // optional: put validate data on req
  // req.validatedUser = { username, password, email, name };

  next();
};

export const verifyToken = async (req, res, next) => {
  // const authHeader = req.headers.authorization;
  // console.log(authHeader);
  // if (!authHeader)
  //   return res.status(401).json({ ok: false, message: "No token" });
  try {
    // const token = authHeader.split(" ")[1]; // "Bearer <token>"
    //console.log(token);
    const token = req.cookies.access_token;
    // console.log(token);
    if (!token) return res.status(403).json({ ok: false, message: "No token" });

    const payload = jwt.verify(token, config.jwtSign); // print the same value jwt.io
    // console.log(payload);

    // *Check if token is in whitelist*
    const tokenDoc = await tokenService.findActiveToken(payload.sub, token);

    if (!tokenDoc)
      return res.status(401).json({ ok: false, message: "Invalid token" });
    // console.log(tokenDoc); // print all properties of the document.

    // migrate req para controllers post ...
    req.user = payload; // { sub, username, role, iat, exp }
    req.token = token; // string
    req.tokenDoc = tokenDoc; // doc mongoose del token
    // req.user = payload; //  sub, username, role...

    next();
  } catch (err) {
    return res.status(401).json({ ok: false, message: "Invalid token" });
  }
};

export const verifyLogin = async (req, res, next) => {
  const { username, password } = req.body;
  // validated with inputs or body from frond whitJoi, also we can those:  Yup, Zod.
  const { error } = loginSchemaValidator.validate(
    { username, password },
    { abortEarly: false }
  );
  if (!error) next();
  if (error)
    return res.status(400).json({
      ok: false,
      errors: error.details.map((detail) => detail.message),
    });
};

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
