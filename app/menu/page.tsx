import { prisma } from "@/lib/prisma";
import Link from "next/link";
import TombolHapus from "../components/TombolHapus";

export default async function MenuPage() {
  const daftarMenu = await prisma.menu.findMany({
    orderBy: {
      id: "asc",
    },
  });

  const gambarMenu: Record<string, string> = {
    latte: "/images/lat.jpg",
    "caramel latte": "/images/mac.jpg",
    "es kopi susu": "/images/ame.jpg",
    matcha: "/images/matc.jpg",
    "matcha latte": "/images/matc.jpg",
    "salt bread": "/images/salt.jpg",
    croissant: "/images/crois.jpg",
    cappuccino: "/images/cap.jpg",
    "strawberry milk": "/images/straw.jpg",
    "mac and cheese": "/images/mac.jpg",
  };

  return (
    <main className="min-h-screen bg-[#f4eee6] px-6 py-12">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.35em] text-[#a35c2b] uppercase">
            Our Menu
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#3b1f14] mt-3">
            Menu dcoff
          </h1>

          <p className="text-[#795548] mt-3">
            Temukan pilihan kopi, minuman, dan makanan favoritmu.
          </p>
        </div>

        <div className="flex justify-end mb-8">
          <Link
            href="/tambah"
            className="bg-[#6b3218] text-white px-6 py-3 font-semibold hover:bg-[#4f2411] transition duration-300"
          >
            + Tambah Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {daftarMenu.map((menu) => {
            const namaMenu = menu.nama_menu.toLowerCase();

            const gambar =
              gambarMenu[namaMenu] || "/images/lat.jpg";

            return (
              <div
                key={menu.id}
                className="bg-white shadow-sm hover:shadow-lg transition duration-300"
              >
                <img
                  src={gambar}
                  alt={menu.nama_menu}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">

                  <span className="inline-block bg-[#ead7c4] text-[#6b3218] px-3 py-1 text-sm">
                    {menu.kategori}
                  </span>

                  <h2 className="text-2xl font-semibold text-[#3b1f14] mt-4">
                    {menu.nama_menu}
                  </h2>

                  <p className="text-xl font-bold text-[#6b3218] mt-3">
                    Rp {menu.harga.toLocaleString("id-ID")}
                  </p>

                  <div className="flex gap-3 mt-6">

                    <Link
                      href={`/edit/${menu.id}`}
                      className="border border-[#6b3218] text-[#6b3218] px-5 py-2 hover:bg-[#6b3218] hover:text-white transition duration-300"
                    >
                      Edit
                    </Link>

                    <TombolHapus id={menu.id} />

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </main>
  );
}