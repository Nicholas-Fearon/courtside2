import { db } from "@/utils/db";

export default async function SinglePlayer({ params }) {
  const { player } = await params;
  console.log("This is my player param:", player);

  const result = await db.query(
    `SELECT id, name, position, height, dob, birth_place FROM players WHERE id = $1;`,
    [player]
  );

  const singlePlayer = result.rows;
  console.log("this is the single player:",singlePlayer)
  return (
    <>
      <h1>Single Player</h1>
      {singlePlayer.map((player) => 
    <div key={player.id}>
        <h3>{player.name}</h3>
        <p>{player.position}</p>
        <p>{player.height}</p>
        <p>{player.dob}</p>
        <p>{player.birth_place}</p>
    </div>
    )}
    </>
  );
}
