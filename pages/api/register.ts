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
    res.status(200).json({ message: " succefully" });
  }
  // else {
  //   const { username, email, password, repeatedpassword } = req.body;
  //   const salt = await bcrypt.genSalt();
  //   const hashedPassword = await bcrypt.hash(password, salt);
  //   let USER;
  //   try {
  //     USER = await prisma.user.create({
  //       data: {
  //         name: username,
  //         email,
  //         password: hashedPassword,
  //       },
  //     });
  //   } catch (error) {
  //     console.error(error.code);
  //     return res.status(401).json({ message: "User already exists" });
  //   }

  //   const token = jwt.sign({ email }, "hello", {
  //     expiresIn: "1d",
  //   });
  //   res.setHeader(
  //     "Set-Cookie",
  //     cookie.serialize("auth token", token, {
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV !== "development",
  //       sameSite: "strict",
  //       maxAge: 60 * 60 * 24, // 1 day
  //       path: "/",
  //     })
  //   );
  //   res.status(200).json({ message: "Success", body: USER });

  //   console.log("new user is created");
  // }
}
