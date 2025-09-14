import * as authService from "../services/auth.service.js";
import * as tokenService from "../services/token.service.js";
// import { validateUser } from "../auth.validators.js";

export const register = async (req, res, next) => {
  try {
    const { username, password, email, name } = req.body;
    const user = await authService.createUser({
      username,
      password,
      email,
      name,
    });
    return (
      res
        .status(201)
        // .json({ ok: true, data: { id: user._id, username: user.username } });
        .json({ ok: true, data: { username: user.username } })
    );
  } catch (err) {
    if (err.code === 11000)
      return res
        .status(409)
        .json({ ok: false, message: "User already exists" });
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await authService.authenticate(username, password);
    if (!result)
      return res
        .status(401)
        .json({ ok: false, message: "Invalid credentials" });

    // save token in a whitelist
    const tokenDoc = await tokenService.createTokenDoc(
      result.user._id,
      result.token
    );

    if (!tokenDoc)
      return res
        .status(500)
        .json({ ok: false, message: "Could not create token" });

    //  send token en httpOnly cookie ...
    res.cookie("access_token", result.token, {
      httpOnly: true,
      sameSite: "strict", // o 'lax'
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 1000, // 1hs en ms
      // path: '/', domain: 'your-dns' , if you like
    });

    /* 
    Note: if your frontend is on another domain, 
    When you do Fetch/Axios you have to send credentials: 
    'include' or withCredentials: true for the browser to attach cookies..
    */
    return res.json({
      ok: true,
      username: result.user.username,
      sub: result.user._id,
    });
  } catch (err) {
    next(err);
  }
};

// maybe this must be another function
export const logout = async (req, res, next) => {
  try {
    // verifyLogin req.tokenDoc y req.token
    if (!req.tokenDoc) {
      return res
        .status(400)
        .json({ ok: false, message: "No active token found" });
    }
    // clean cookie a at Client
    res.clearCookie("access_token", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    const result = await tokenService.invalidateToken(req.token);
    if (!result) {
      return res
        .status(400)
        .json({ ok: false, message: "Token could not be invalidated" });
    }
    return res.json({ ok: true, message: "Logged out" });
  } catch (err) {
    next(err);
  }
};
