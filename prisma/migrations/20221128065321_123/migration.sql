-- CreateTable
CREATE TABLE "Surah" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "arabicName" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "ayahs" INTEGER NOT NULL,
    "qariId" INTEGER NOT NULL,
    "qariName" TEXT NOT NULL,

    CONSTRAINT "Surah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Qari" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "arabicName" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Qari_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Qari_id_key" ON "Qari"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Qari_name_key" ON "Qari"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Surah" ADD CONSTRAINT "Surah_qariId_fkey" FOREIGN KEY ("qariId") REFERENCES "Qari"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
