import { prisma } from "@/lib/prisma";

export async function GET() {
  const menu = await prisma.menu.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return Response.json(menu);
}