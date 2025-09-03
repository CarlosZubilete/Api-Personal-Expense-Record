// import { validateUser } from "./auth.middleware.js";
// import User from "../models/auth.model.user.js";
// import { userSchemaValidator } from "../validators/validador.model.user.js";

// // src/features/auth/middlewares/auth.middleware.test.js

// // Mock dependencies
// jest.mock("../models/auth.model.user.js");
// jest.mock("../validators/validador.model.user.js");

// describe("validateUser middleware", () => {
//   let req;
//   let res;
//   let next;

//   beforeEach(() => {
//     req = {
//       body: {
//         username: "testuser",
//         password: "Password123!",
//         email: "test@example.com",
//         name: "Test User",
//       },
//     };
//     res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };
//     next = jest.fn();

//     // Reset mocks
//     User.findOne.mockReset();
//     userSchemaValidator.validate.mockReset();
//   });

//   test("should return 400 if validation fails", async () => {
//     const mockError = {
//       details: [{ message: "Username is required" }],
//     };
//     userSchemaValidator.validate.mockReturnValue({ error: mockError });

//     await validateUser(req, res, next);

//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith({
//       ok: false,
//       errors: ["Username is required"],
//     });
//     expect(next).not.toHaveBeenCalled();
//   });

//   test("should return 409 if username already exists", async () => {
//     userSchemaValidator.validate.mockReturnValue({ error: null });
//     User.findOne.mockResolvedValue({ username: "testuser" });

//     await validateUser(req, res, next);

//     expect(res.status).toHaveBeenCalledWith(409);
//     expect(res.json).toHaveBeenCalledWith({
//       ok: false,
//       message: "User with this username already exists",
//     });
//     expect(next).not.toHaveBeenCalled();
//   });

//   test("should return 409 if email already exists", async () => {
//     userSchemaValidator.validate.mockReturnValue({ error: null });
//     User.findOne.mockResolvedValue({
//       username: "otheruser",
//       email: "test@example.com",
//     });

//     await validateUser(req, res, next);

//     expect(res.status).toHaveBeenCalledWith(409);
//     expect(res.json).toHaveBeenCalledWith({
//       ok: false,
//       message: "User with this email already exists",
//     });
//     expect(next).not.toHaveBeenCalled();
//   });

//   test("should call next() if validation passes and user does not exist", async () => {
//     userSchemaValidator.validate.mockReturnValue({ error: null });
//     User.findOne.mockResolvedValue(null);

//     await validateUser(req, res, next);

//     expect(next).toHaveBeenCalled();
//     expect(res.status).not.toHaveBeenCalled();
//     expect(res.json).not.toHaveBeenCalled();
//   });

//   test("should handle database errors", async () => {
//     userSchemaValidator.validate.mockReturnValue({ error: null });
//     const dbError = new Error("Database error");
//     User.findOne.mockRejectedValue(dbError);

//     await validateUser(req, res, next);

//     expect(next).toHaveBeenCalledWith(dbError);
//   });
// });
