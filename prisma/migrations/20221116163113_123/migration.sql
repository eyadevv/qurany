/*
  Warnings:

  - You are about to drop the `Surah` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Surah" DROP CONSTRAINT "Surah_qariId_qariName_fkey";

-- DropTable
DROP TABLE "Surah";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "surah" (
    "name" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "ayahs" INTEGER NOT NULL,
    "qariId" INTEGER NOT NULL,
    "place" TEXT NOT NULL,
    "qariName" TEXT NOT NULL,

    CONSTRAINT "surah_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "surah" ADD CONSTRAINT "surah_qariId_qariName_fkey" FOREIGN KEY ("qariId", "qariName") REFERENCES "qari"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
