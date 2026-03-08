import { cookies } from "next/headers";

export async function POST() {
  const cookie = await cookies();
  cookie.delete("firebase-token");
  return Response.json({ success: true });
}
