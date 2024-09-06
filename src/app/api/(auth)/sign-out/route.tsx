import { deleteSession } from "~/app/lib/session";

export async function GET() {
  try {
    deleteSession();
    // redirect("/sign-in");

    return Response.json({
      message: "Lougout successfull",
      success: true,
    });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
