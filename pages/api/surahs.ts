import { NextRequest, NextResponse } from "next/server";
// import validateRoute from "../../lib/auth";
import prisma from "../../lib/prisma";
export default async function handle(req, res) {
  const id = Number(req.body.qariId);

  try {
    await prisma.surah
      .findMany()
      .then((surahs) => {
        res.json(surahs);
      })
      .catch((err) => {
        console.log("there was an error", err.code);

        res.status(500).json({ error: "there was an error" });
      });
  } catch (error) {
    console.log(error);
  }
}
