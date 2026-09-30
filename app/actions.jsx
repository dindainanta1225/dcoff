"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function tambahMenu(formData) {
  const nama_menu = formData.get("nama_menu");
  const kategori = formData.get("kategori");
  const harga = formData.get("harga");

  await prisma.menu.create({
    data: {
      nama_menu,
      kategori,
      harga: Number(harga),
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function editMenu(formData) {
  const id = formData.get("id");
  const nama_menu = formData.get("nama_menu");
  const kategori = formData.get("kategori");
  const harga = formData.get("harga");

  await prisma.menu.update({
    where: {
      id: Number(id),
    },
    data: {
      nama_menu,
      kategori,
      harga: Number(harga),
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function hapusMenu(formData) {
  const id = formData.get("id");

  await prisma.menu.delete({
    where: {
      id: Number(id),
    },
  });

  revalidatePath("/");
}