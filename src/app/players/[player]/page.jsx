import { db } from "@/utils/db";

export default async function SinglePlayer({ params }) {
  const { player } = await params;
  console.log("This is my player param:", player);

  const result = await db.query(
    `SELECT id, name, position, height, dob, birth_place FROM players WHERE id = $1;`,
    [player]
  );

  const singlePlayer = result.rows;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">Player Details</h1>
      {singlePlayer.length > 0 ? (
        singlePlayer.map((player) => (
          <div
            key={player.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-lg mx-auto"
          >
            <h2 className="text-xl font-bold mb-4">{player.name}</h2>
            <p className="text-gray-600 mb-2">
              <strong>Position:</strong> {player.position}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Height:</strong> {player.height}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Date of Birth:</strong>{" "}
              {new Date(player.dob).toLocaleDateString()}
            </p>
            <p className="text-gray-600">
              <strong>Birthplace:</strong> {player.birth_place}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Player not found.</p>
      )}
    </div>
  );
}