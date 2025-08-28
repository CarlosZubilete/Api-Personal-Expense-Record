import * as authService from "./auth.service.js";
import { validateUser } from "./auth.validators.js";

export const register = async (req, res, next) => {
  try {
    const { username, password, email, name } = req.body;

    const validation = await validateUser({ username, password, email, name });
    if (validation.error) {
      return res.status(400).json({ ok: false, errors: validation.error });
    }

    const user = await authService.createUser({
      username,
      password,
      email,
      name,
    });
    return res
      .status(201)
      .json({ ok: true, data: { id: user._id, username: user.username } });
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
    // return res.json({ ok: true, data: result.payload });
    //  enviar token en httpOnly cookie (más seguro) o en body si es API pura
    return res.json({ ok: true, token: result.token });
  } catch (err) {
    next(err);
  }
};
