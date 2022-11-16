/*
  Warnings:

  - A unique constraint covering the columns `[id,name]` on the table `qari` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `qariName` to the `Surah` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Surah" DROP CONSTRAINT "Surah_qariId_fkey";

-- AlterTable
ALTER TABLE "Surah" ADD COLUMN     "qariName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "qari_id_name_key" ON "qari"("id", "name");

-- AddForeignKey
ALTER TABLE "Surah" ADD CONSTRAINT "Surah_qariId_qariName_fkey" FOREIGN KEY ("qariId", "qariName") REFERENCES "qari"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
