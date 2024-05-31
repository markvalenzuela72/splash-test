"use server";
import { sql } from "@vercel/postgres";
import { GameUser } from "./definition"; // Assuming chat is not used here

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
): Promise<GameUser> {
  // Specify the return type as Promise<GameUser>
  const rawFormData = {
    name: formData.get("game_name") as string,
  };

  try {
    const userResult =
      await sql<GameUser>`SELECT * FROM game_users WHERE name=${rawFormData.name}`;
    const user = userResult.rows[0];
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
