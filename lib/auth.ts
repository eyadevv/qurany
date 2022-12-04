import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export default function validateRoute(handler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.auth;
    if (token) {
      let USER;
      try {
        const { email } = verify(token, "hello") as { email: string };
        USER = await prisma.user
          .findUnique({
            where: {
              email,
            },
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "there was an error" });
          });
      } catch (error) {
        console.error(error);
        res.status(401).json({ message: "expired token" });
      }
      return handler(req, res, USER);
    } else {
      res.redirect("/welcome");
    }
  };
}
