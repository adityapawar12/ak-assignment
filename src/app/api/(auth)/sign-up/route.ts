import bcryptjs from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const reqBody: { name: string; email: string; password: string } =
      await req.json();
    const { name, email, password } = reqBody;

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashedPassword,
      },
    });

    return Response.json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
