import { NextRequest, NextResponse } from "next/server";
import validateRoute from "../../lib/auth";
import prisma from "../../lib/prisma";
export default validateRoute(async (req, res) => {
  const id = Number(req.body.qariId);

  try {
    await prisma.surah
      .findMany({
        where: {
          qariId: id,
        },
      })
      .then((surahs) => {
        res.json(surahs);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  } catch (error) {
    console.log(error);
  }
});
