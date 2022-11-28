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
        update: {},
        create: {
          id: qari.id,
          name: qari.name,
          arabicName: qari.arabicName,
          image: qari.image,
          country: qari.country,
          surahs: {
            create: qari.surahs.map((surah) => ({
              id: surah.id,
              name: surah.name,
              arabicName: surah.arabicName,
              place: surah.place,
              ayahs: surah.ayahs,
              qariName: qari.name,
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
