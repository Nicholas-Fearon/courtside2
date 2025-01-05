import { db } from "@/utils/db";

export default async function Roster({ params }) {
  const { id } = await params;

  try {
    const result = await db.query(
      `SELECT id, name, position, height, dob, birth_place FROM players WHERE team_id = $1;`,
      [id]
    );

    const rosterData = result.rows;

    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-8">Roster</h2>
        {rosterData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rosterData.map((player) => (
              <div
                key={player.id}
                className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold">{player.name}</h3>
                <p className="text-gray-500">
                  Position: {player.position}
                </p>
                <p className="text-gray-500">Height: {player.height}</p>
                <p className="text-gray-500">
                  Date of Birth: {new Date(player.dob).toLocaleDateString()}
                </p>
                <p className="text-gray-500">Birthplace: {player.birth_place}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No players found.</p>
        )}
      </div>
    );
  } catch (error) {
    console.error("Database query failed:", error);
    return (
      <p className="text-center text-red-500">
        Failed to fetch roster. Please try again later.
      </p>
    );
  }
}