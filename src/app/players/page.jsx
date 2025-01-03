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
          <div key={player.id}>
            <h3>{player.name}</h3>
          </div>
        );
      })}
    </>
  );
}
