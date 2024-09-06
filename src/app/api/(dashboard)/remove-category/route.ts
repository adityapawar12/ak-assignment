import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const reqBody: { categoryId: number; userId: number } = await req.json();
    const { categoryId, userId } = reqBody;

    await prisma.userCategoryRel.delete({
      where: {
        userId_categoryId: {
          userId: userId,
          categoryId: categoryId,
        },
      },
    });

    return Response.json({
      message: "Removed!",
      success: true,
    });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
