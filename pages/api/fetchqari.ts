// import validateRoute from "../../lib/auth";
import prisma from "../../lib/prisma"

// export default validateRoute(
export default async function handler(req, res) {
  const id = req.body.qariId
  try {
    await prisma.qari
      .findUnique({
        where: {
          id: Number(id),
        },
      })
      .then((qari) => {
        if (qari) {
          res.status(200).json(qari)
        } else {
          res.status(404).json({ message: "Qari not found" })
        }
      })
      .catch((err) => {
        throw new Error(err)
      })
  } catch (error) {
    console.log(error)
  }
}
// );
