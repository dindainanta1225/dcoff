import { prisma } from "@/lib/prisma";
import { editMenu } from "@/app/actions";

export default async function EditMenu({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const menu = await prisma.menu.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!menu) {
    return (
      <main className="min-h-screen bg-amber-50 px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-amber-950">
            Menu tidak ditemukan
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-amber-50 px-6 py-10">
      <div className="max-w-2xl mx-auto">

        <div className="bg-white rounded-2xl shadow-md p-8">

          <h1 className="text-3xl font-bold text-amber-950 mb-2">
            Edit Menu
          </h1>

          <p className="text-amber-700 mb-8">
            Ubah data menu Kopi Senja.
          </p>

          <form action={editMenu} className="space-y-5">

            <input
              type="hidden"
              name="id"
              value={menu.id}
            />

            <div>
              <label className="block font-semibold text-amber-950 mb-2">
                Nama Menu
              </label>

              <input
                type="text"
                name="nama_menu"
                defaultValue={menu.nama_menu}
                required
                className="w-full border border-amber-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>

            <div>
              <label className="block font-semibold text-amber-950 mb-2">
                Kategori
              </label>

              <select
                name="kategori"
                defaultValue={menu.kategori}
                required
                className="w-full border border-amber-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-600"
              >
                <option value="Coffee">Coffee</option>
                <option value="Non Coffee">Non Coffee</option>
                <option value="Food">Food</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-amber-950 mb-2">
                Harga
              </label>

              <input
                type="number"
                name="harga"
                defaultValue={menu.harga}
                required
                className="w-full border border-amber-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-900 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition duration-300"
            >
              Simpan Perubahan
            </button>

          </form>

        </div>

      </div>
    </main>
  );
}