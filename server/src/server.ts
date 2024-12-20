import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import { run, client } from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;
const jwtSecret = process.env.JWT_SECRET;
const db = client.db("socialmedia-app");

console.log("DB PORT: ", port);

(async () => {
  try {
    await run();

    // base
    app.get("/", (req: Request, res: Response) => {
      console.log("Req received for base URL");
      res.json({ message: "Hello from TypeScript Node.js server!" });
    });

    // login
    app.post(
      "/login",
      async (req: Request, res: Response): Promise<Response> => {
        console.log("Req received for login");
        const { email, password } = req.body;
        console.log("Req email: ", email);
        console.log("Req pass: ", password);

        if (!email || !password) {
          return res.status(400).json({
            message: "Email and password are required.",
          });
        }

        try {
          const user = await db.collection("Users").findOne({ email });
          if (!user) {
            return res.status(404).json({
              message: "user not found.",
            });
          }

          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            return res.status(401).json({
              message: "Invalid credentials.",
            });
          }

          const token = jwt.sign(
            {
              id: user._id,
              email: user.email,
            },
            jwtSecret!
          );

          return res.json({
            token: token,
            message: "Login successful",
          });
        } catch (e) {
          console.error("Error during login:", e);
          return res.status(500).json({
            message: "Server Error.",
          });
        }
      }
    );

    // signup
    app.post(
      "/signup",
      async (req: Request, res: Response): Promise<Response> => {
        console.log("Req received for signup");
        const { name, email, password } = req.body;
        console.log("Req name: ", name);
        console.log("Req email: ", email);
        console.log("Req pass: ", password);

        if (!name || !email || !password) {
          return res.status(400).json({
            message: "Name, email and password are required.",
          });
        }

        try {
          const user = await db.collection("Users").findOne({ email });

          if (user) {
            return res.status(409).json({
              message: "user with this email already exists.",
            });
          }

          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = {
            name,
            email,
            password: hashedPassword,
            createdAt: new Date(),
          };

          const result = await db.collection("Users").insertOne(newUser);

          const token = jwt.sign(
            {
              id: result.insertedId,
              email: newUser.email,
            },
            jwtSecret!,
          );

          return res.status(201).json({
            token: token,
            message: "Signed up successfully.",
          });
        } catch (e) {
          console.error("Error during signup:", e);
          return res.status(500).json({
            message: "Server Error.",
          });
        }
      }
    );

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (e) {
    console.error("Failed to start the server:", e);
  }
})();
