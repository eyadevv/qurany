-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "useName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sheik" (
    "name" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "nationality" TEXT NOT NULL,

    CONSTRAINT "Sheik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Surah" (
    "name" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "sheikId" INTEGER NOT NULL,

    CONSTRAINT "Surah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Playlist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "surahId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "sheikId" INTEGER,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_useName_key" ON "User"("useName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Sheik_name_key" ON "Sheik"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Surah_name_key" ON "Surah"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Surah_sheikId_key" ON "Surah"("sheikId");

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_name_key" ON "Playlist"("name");

-- AddForeignKey
ALTER TABLE "Surah" ADD CONSTRAINT "Surah_sheikId_fkey" FOREIGN KEY ("sheikId") REFERENCES "Sheik"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_surahId_fkey" FOREIGN KEY ("surahId") REFERENCES "Surah"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_sheikId_fkey" FOREIGN KEY ("sheikId") REFERENCES "Sheik"("id") ON DELETE SET NULL ON UPDATE CASCADE;
