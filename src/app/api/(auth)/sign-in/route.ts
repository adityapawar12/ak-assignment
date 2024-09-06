import bcryptjs from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { createSession } from "~/app/lib/session";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const reqBody: { email: string; password: string } = await req.json();
    const { email, password } = reqBody;

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return Response.json({ error: "User does not exists" }, { status: 400 });
    }

    //check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return Response.json({ error: "Invalid password" }, { status: 400 });
    }

    await createSession(user.id);

    return Response.json({
      message: "Login successfull",
      success: true,
    });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
