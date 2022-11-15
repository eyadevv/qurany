/*
  Warnings:

  - You are about to drop the column `sheikId` on the `Surah` table. All the data in the column will be lost.
  - You are about to drop the `Playlist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sheik` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ayahs` to the `Surah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pages` to the `Surah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Surah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Surah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Surah` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_sheikId_fkey";

-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_surahId_fkey";

-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_userId_fkey";

-- DropForeignKey
ALTER TABLE "Surah" DROP CONSTRAINT "Surah_sheikId_fkey";

-- DropIndex
DROP INDEX "Surah_name_key";

-- DropIndex
DROP INDEX "Surah_sheikId_key";

-- AlterTable
ALTER TABLE "Surah" DROP COLUMN "sheikId",
ADD COLUMN     "ayahs" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pages" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- DropTable
DROP TABLE "Playlist";

-- DropTable
DROP TABLE "Sheik";

-- DropTable
DROP TABLE "User";
