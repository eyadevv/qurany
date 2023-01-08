import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mode = req.body.mode;
  const { email, username, pass, repass } = req.body.data;
  try {
    if (mode === "register") {
      await prisma.user.create({
        data: {
          email,
          name: username,
          password: pass,
          role: "user",
        },
      });
    } else {
      await prisma.user
        .findUniqueOrThrow({
          select: {
            email: true,
          },
          where: {
            email,
          },
        })
        .then((res) => console.log("Found the user try to login"));
    }
  } catch (error) {
    console.log("there was an error");
    res.status(500).json({ msg: "internal server error , please try again" });
    await prisma.$disconnect();
  }
}
