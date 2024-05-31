import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { GameUser } from "./definition";
export async function fetchCardData(id: string) {
  noStore();
  try {
    const game_user =
      await sql<GameUser>`SELECT * FROM game_users where id = ${id}`;

    return game_user.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}
