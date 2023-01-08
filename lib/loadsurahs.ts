import prisma from "./prisma";
export async function loadSurahs() {
  try {
    let data;
    await prisma.surah
      .findMany()
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
