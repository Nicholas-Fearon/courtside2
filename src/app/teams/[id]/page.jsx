import { db } from "@/utils/db";
import Link from "next/link";
export default async function SingleTeam({ params }) {
  const { id } = params;

  console.log("This is my single team log:", id);

  const teamResult = await db.query(
    `SELECT
            name,
            location,
            history,
            arena_name,
            capacity,
            logo
        FROM teams_info
        WHERE teams_info.id = $1`,
    [id]
  );

  const team = teamResult?.rows[0] || {};

  return (
    <>
      {team.name ? (
        <div>
          <p>Name: {team.name}</p>
          <p>Location: {team.location}</p>
          <p>History: {team.history}</p>
          <p>Arena: {team.arena_name}</p>
          <p>Capacity: {team.capacity}</p>
          <Link href="">Rosters</Link>
        </div>
      ) : (
        <p>Team not found</p>
      )}
    </>
  );
}
