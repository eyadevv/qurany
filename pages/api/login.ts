import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  } else {
    console.log(req.body);

    const { email, password } = req.body;
    const USER = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (USER && bcrypt.compareSync(password, USER.password)) {
      const token = jwt.sign(
        {
          email: USER.email,
          time: Date.now(),
        },
        "hello",
        {
          expiresIn: "1d",
        }
      );
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("auth", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          maxAge: 60 * 60 * 24,
          path: "/",
          email: USER.email,
        })
      );
      res.status(200).json({ message: "Login succefully", body: USER });
      console.log("login succefully");
    } else {
      res.status(401).json({ error: "invalid email or password" });
    }
  }
}
