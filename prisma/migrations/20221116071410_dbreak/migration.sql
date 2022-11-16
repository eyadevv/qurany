/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Surah` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Surah` table. All the data in the column will be lost.
  - Added the required column `englishName` to the `Surah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qariId` to the `Surah` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Surah" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "englishName" TEXT NOT NULL,
ADD COLUMN     "qariId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "qari" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "surahsCount" INTEGER NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "qari_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Surah" ADD CONSTRAINT "Surah_qariId_fkey" FOREIGN KEY ("qariId") REFERENCES "qari"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
