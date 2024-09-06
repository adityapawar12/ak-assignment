import { PrismaClient } from "@prisma/client";
import { getSession } from "~/app/lib/session";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const reqBody: { categoryId: number } = await req.json();
    const { categoryId } = reqBody;

    const session = await getSession();
    await prisma.userCategoryRel.create({
      data: {
        user: {
          connect: { id: Number(session?.userId) },
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
    return Response.json({ error: error }, { status: 500 });
  }
}
