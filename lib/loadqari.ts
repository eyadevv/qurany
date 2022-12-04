import prisma from "./prisma";
export async function loadQari() {
  // try {
  //   const res = await fetch("http://localhost:3000/api/qaris", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(1),
  //   });
  //   const data = await res.json();
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }
  try {
    let data;
    await prisma.qari
      .findUnique({
        where: {
          id: Number(1),
        },
      })
      .then((qari) => {
        if (qari) {
          console.log(qari);
          data = qari;
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log("error on the prisma layer");
      });
    return data;
  } catch (error) {
    console.log(error);
  }
}
