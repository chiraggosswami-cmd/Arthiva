import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const { Pool } = pg;

const dbUrl = process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/margin_pilot";

export let pool = new Pool({ connectionString: dbUrl });
export let db = drizzle(pool, { schema });

export function setTestDb(newDb: any, newPool?: any) {
  db = newDb;
  if (newPool) {
    pool = newPool;
  }
}

export * from "./schema";
export { eq, and, desc, asc, sql } from "drizzle-orm";
