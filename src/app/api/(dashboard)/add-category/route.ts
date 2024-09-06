import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const reqBody: { categoryId: number; userId: number } = await req.json();
    const { categoryId, userId } = reqBody;

    await prisma.userCategoryRel.create({
      data: {
        user: {
          connect: { id: userId },
        },
        category: {
          connect: { id: categoryId },
        },
      },
    });

    return Response.json({
      message: "Added!",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error }, { status: 500 });
  }
}
