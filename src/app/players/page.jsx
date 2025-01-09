import Link from "next/link";
const { db } = require("@/utils/db");

export default async function Players() {
  const result = await db.query(`SELECT * FROM players`);
  const players = result.rows;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8">List of All Players</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <Link href={`/players/${player.id}`} key={player.id}>
            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{player.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}