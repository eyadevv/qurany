import { PrismaClient } from "@prisma/client";
import { data } from "./data";
const prisma = new PrismaClient();

async function run() {
  data.map(async (qari) => {
    await prisma.qari
      .upsert({
        where: {
          id: qari.id,
        },
        update: {
          id: qari.id,
          name: qari.name,
          arabicName: qari.arabicName,
          image: qari.image,
          country: qari.country,
          surahs: {
            upsert: qari.surahs.map((surah) => ({
              where: {
                id: surah.id,
              },
              update: {},
              create: {
                name: surah.name,
                arabicName: surah.arabicName,
                place: surah.place,
                ayahs: surah.ayahs,
              },
            })),
          },
        },
        create: {
          id: qari.id,
          name: qari.name,
          arabicName: qari.arabicName,
          image: qari.image,
          country: qari.country,
          surahs: {
            create: qari.surahs.map((surah) => ({
              name: surah.name,
              arabicName: surah.arabicName,
              place: surah.place,
              ayahs: surah.ayahs,
            })),
          },
        },
      })
      .then((res) => console.log(`Qari ${res.name} created`))
      .catch((err) => console.log(`qari: ${err}`))
      .finally(() => prisma.$disconnect());
  });
}
run();
