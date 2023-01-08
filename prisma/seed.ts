import { PrismaClient } from "@prisma/client"
import { qaris, surahs } from "./data"
const prisma = new PrismaClient()

async function run() {
  qaris.map(async (qari) => {
    await prisma.qari
      .upsert({
        where: {
          id: qari.id,
        },
        update: {
          image: qari.image,
        },
        create: {
          id: qari.id,
          name: qari.name,
          arabicName: qari.arabicName,
          image: qari.image,
          country: qari.country,
        },
      })
      .then((res) => console.log(`Qari ${res.name} created`))
      .catch((err) => console.log(`qari: ${err}`))
      .finally(() => prisma.$disconnect())
  })
  surahs.map(async (surah) => {
    await prisma.surah
      .upsert({
        select: {
          id: true,
        },
        where: {
          id: surah.id,
        },
        update: {},
        create: {
          id: surah.id,
          name: surah.name,
          arabicName: surah.arabicName,
          place: surah.place,
          ayahs: surah.ayahs,
        },
      })
      .then((res) => console.log(`Surah ${res.id} created`))
      .catch((err) => console.error(`Surah: ${err}`))
      .finally(() => prisma.$disconnect())
  })
}
run()
