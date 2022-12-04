import prisma from "./prisma";
export async function loadSurahs() {
  try {
    let data;
    await prisma.surah
      .findMany({
        where: {
          qariId: 1,
        },
      })
      .then((surahs) => {
        data = surahs;
      })
      .catch((err) => {
        console.log("there was an error , on the prisma layer");
      });
    return data;
  } catch (error) {
    console.log(error);
  }
}
