/*
  Warnings:

  - You are about to drop the column `englishName` on the `Surah` table. All the data in the column will be lost.
  - You are about to drop the column `pages` on the `Surah` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Surah` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Surah` table. All the data in the column will be lost.
  - Added the required column `place` to the `Surah` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Surah" DROP COLUMN "englishName",
DROP COLUMN "pages",
DROP COLUMN "type",
DROP COLUMN "url",
ADD COLUMN     "place" TEXT NOT NULL;
