import { db } from "@/utils/db";

export default async function Roster({ params }) {
  const { roster } = params;
  console.log("This is my roster log:", roster);

  try {
    const result = await db.query(
      `SELECT 
        name,
        position,
        height,
        dob,
        birth_place
      FROM players
      WHERE team_id = $1;`,
      [roster]
    );
    const rosterData = result.rows;

    if (!rosterData || rosterData.length === 0) {
      return <p>Roster not found.</p>;
    }

    return (
      <>
        <h2>Roster</h2>
        <ul>
          {rosterData.map((player) => (
            <li key={player.name}>
              {player.name} - {player.position}
            </li>
          ))}
        </ul>
      </>
    );
  } catch (error) {
    console.error("Database query failed:", error);
    return <p>Failed to fetch roster.</p>;
  }
}
