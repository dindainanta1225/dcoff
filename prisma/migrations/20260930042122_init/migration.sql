-- CreateTable
CREATE TABLE "menu" (
    "id" SERIAL NOT NULL,
    "nama_menu" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "harga" INTEGER NOT NULL,

    CONSTRAINT "menu_pkey" PRIMARY KEY ("id")
);
