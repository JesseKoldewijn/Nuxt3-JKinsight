import { db } from "@/server/db/conn";
import { Projects } from "@/server/db/schemas/projects";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const searchParams =
    event.node.req.url && new URLSearchParams(event.node.req.url.split("?")[1]);

  const specificID = searchParams && searchParams.get("id");

  if (specificID) {
    const project = await db
      .select()
      .from(Projects)
      .where(eq(Projects.id, specificID))
      .execute();

    return {
      status: 200,
      body: {
        message: `You requested project with ID ${specificID}`,
        data: project,
      },
    };
  } else {
    const projects = await db.select().from(Projects).execute();

    return {
      status: 200,
      body: {
        message: `You requested all projects`,
        data: projects,
      },
    };
  }
});
