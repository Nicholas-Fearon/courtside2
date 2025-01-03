import Link from "next/link";
import Image from "next/image";
const { db } = require("@/utils/db");

export default async function Teams() {
  const result = await db.query(`SELECT * FROM teams_info ORDER BY id`);
  const teams = result.rows;
  console.log(teams);
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8">Teams</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Link key={team.id} href={`/teams/${team.id}`}>
            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <Image
                src={team.logo}
                alt={`${team.name} logo`}
                height={50}
                width={50}
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold">{team.name}</h3>
                <p className="text-gray-500">{team.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
