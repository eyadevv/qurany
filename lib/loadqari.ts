import prisma from "./prisma";
export async function loadQari(id) {
  try {
    let data;
    if (id) {
      await prisma.qari
        .findUnique({
          where: {
            id: Number(id),
          },
        })
        .then((qari) => {
          data = qari;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await prisma.qari
        .findMany()
        .then((qari) => {
          if (qari) {
            data = qari;
          } else {
            console.log("error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return data || null;
  } catch (error) {
    console.log("there was an error");
  }
}
