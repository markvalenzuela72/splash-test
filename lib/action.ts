"use server";
import { sql } from "@vercel/postgres";
import { GameUser } from "./definition";
import { redirect } from "next/dist/server/api-utils";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
): Promise<GameUser> {
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
  }
}
