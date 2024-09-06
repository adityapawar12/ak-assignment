import { PrismaClient } from "@prisma/client";
import { getSession } from "~/app/lib/session";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const reqBody: { categoryId: number } = await req.json();
    const { categoryId } = reqBody;

    const session = await getSession();

    const category = await prisma.userCategoryRel.findFirst({
      select: { id: true },
      where: {
        categoryId: categoryId,
        userId: Number(session?.userId),
      },
    });

    return Response.json({
      isChecked: category ? true : false,
      success: true,
    });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
