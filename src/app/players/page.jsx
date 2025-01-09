import Link from "next/link";
const { db } = require("@/utils/db");
export default async function Players() {
  const result = await db.query(`SELECT * FROM players`);
  const players = result.rows;
  return (
    <>
      <h2>List Of All Players</h2>

      {players.map((player) => {
        console.log(player);
        return (
          <Link href={`/players/${player.id}`} key={player.id} >
          <div >
            <h3>{player.name}</h3>
          </div>
          </Link>
          
        );
      })}
    </>
  );
}
