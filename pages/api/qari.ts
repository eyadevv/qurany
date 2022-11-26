import validateRoute from "../../lib/auth";
import prisma from "../../lib/prisma";
export default validateRoute(async function handle(req, res) {
  try {
    await prisma.qari
      .findMany()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res
          .status(404)
          .json({ message: "Empty DataBase Try again after seeding" });
      });
  } catch (error) {
    console.log(error);
  }
});
