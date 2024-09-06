import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const reqBody: { categoryId: number; userId: number } = await req.json();
    const { categoryId, userId } = reqBody;

    const category = await prisma.userCategoryRel.findFirst({
      select: { id: true },
      where: {
        categoryId: categoryId,
        userId: userId,
      },
    });

    return Response.json({
      isChecked: category ? true : false,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error }, { status: 500 });
  }
}
