import prisma from "./prisma";
export async function loadSurahs(qariId) {
  try {
    let data;
    await prisma.surah
      .findMany({
        where: {
          qariId: Number(qariId),
        },
      })
      .then((surahs) => {
        data = surahs;
      })
      .catch((err) => {
        console.log(err);
      });
    return data || null;
  } catch (error) {
    console.log(error);
  }
}
