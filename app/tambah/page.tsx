import FormTambahMenu from "../components/FormTambahMenu";

export default function TambahMenu() {
  return (
    <main className="min-h-screen bg-[#f4eee6] px-6 py-12">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.35em] text-[#a35c2b] uppercase">
            Add Menu
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#3b1f14] mt-3">
            Tambah Menu
          </h1>

          <p className="text-[#795548] mt-3">
            Tambahkan pilihan baru ke menu dcoff.
          </p>
        </div>

        <div className="bg-white shadow-lg p-8">
          <FormTambahMenu />
        </div>

      </div>
    </main>
  );
}