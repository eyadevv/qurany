import validateRoute from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoute(async function handler(req, res) {
  const id = req.body.qariId;
  console.log(id);

  try {
    await prisma.qari
      .findUnique({
        where: {
          id: Number(id),
        },
      })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(404).json("NO Qari Found");
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
});
