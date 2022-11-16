import { PrismaClient } from "@prisma/client";
import data from "./data.js";

const prisma = new PrismaClient();

const run = async () => {
  await prisma.qari.upsert({
    where: { id: data.id },
    update: {},
    create: {
      id: data.id,
      name: data.name,
      image: data.image,
      surahsCount: data.surahsCount,
      country: data.country,
      surahs: {
        create: data.surahs.map((surah) => ({
          id: surah.id,
          name: surah.name,
          ayahs: surah.ayahs,
          place: surah.place,
        })),
      },
    },
  });
};
run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
