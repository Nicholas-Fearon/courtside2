import Link from "next/link";
import Image from "next/image";
import { db } from "@/utils/db";

export default async function SingleTeam({ params }) {
  const { id } = await params;

  const teamResult = await db.query(
    `SELECT name, location, history, arena_name, capacity, logo FROM teams_info WHERE id = $1`,
    [id]
  );

  const team = teamResult?.rows[0] || {};

  return (
    <div className="container mx-auto p-6">
      {team.name ? (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="flex items-center gap-6 mb-4">
            <Image
              src={team.logo}
              alt={`${team.name} logo`}
              height={100}
              width={100}
              className="rounded-md"
            />
            <div>
              <h2 className="text-2xl font-bold">{team.name}</h2>
              <p className="text-gray-500">{team.location}</p>
            </div>
          </div>
          <p className="mb-4">
            <strong>History:</strong> {team.history}
          </p>
          <p className="mb-4">
            <strong>Arena:</strong> {team.arena_name}
          </p>
          <p className="mb-4">
            <strong>Capacity:</strong> {team.capacity}
          </p>
          <Link
            href={`/teams/${id}/roster`}
            className="text-blue-500 hover:underline"
          >
            View Current Roster
          </Link>
        </div>
      ) : (
        <p className="text-center text-gray-500">Team not found.</p>
      )}
    </div>
  );
}