import { db } from "@/utils/db";
export default async function SingleTeam({params}) {
    const {id} = await params;
    console.log("This is my single team log:", id);

const teamResult = await db.query(
    `SELECT
    name,
    location,
    history
    arena_name,
    capacity,
    logo
    FROM teams_info
    WHERE teams_info.id = $1`,
    [id]
);

const team = teamResult?.rows || [];

return (<>
    <p>{team.name}</p>
</>)

}