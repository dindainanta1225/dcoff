"use client";

import { useState } from "react";
import { tambahMenu } from "../actions";

export default function FormTambahMenu() {
  const [namaMenu, setNamaMenu] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("nama_menu", namaMenu);
    formData.append("kategori", kategori);
    formData.append("harga", harga);

    try {
      await tambahMenu(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label className="block text-sm font-semibold text-[#3b1f14] mb-2">
          Nama Menu
        </label>

        <input
          type="text"
          value={namaMenu}
          onChange={(e) => setNamaMenu(e.target.value)}
          placeholder="Contoh: Es Kopi Susu"
          required
          className="w-full border border-[#d8c2ad] px-4 py-3 outline-none focus:border-[#6b3218]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#3b1f14] mb-2">
          Kategori
        </label>

        <select
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          required
          className="w-full border border-[#d8c2ad] px-4 py-3 outline-none focus:border-[#6b3218]"
        >
          <option value="">Pilih Kategori</option>
          <option value="Coffee">Coffee</option>
          <option value="Non Coffee">Non Coffee</option>
          <option value="Food">Food</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#3b1f14] mb-2">
          Harga
        </label>

        <input
          type="number"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          placeholder="18000"
          required
          className="w-full border border-[#d8c2ad] px-4 py-3 outline-none focus:border-[#6b3218]"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#6b3218] text-white py-3 font-semibold hover:bg-[#4f2411] transition duration-300 disabled:opacity-50"
      >
        {isLoading ? "Menyimpan..." : "Simpan Menu"}
      </button>

    </form>
  );
}