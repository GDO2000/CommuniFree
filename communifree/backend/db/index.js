import pg from "pg";

const databaseU = process.env.NEXT_PUBLIC_SUPABASE_URL;
const APIkey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!connectionString) {
  throw new Error("No DB_CONNECTION_STRING defined. Did you load in your env variables?");
} 

export const pool = new pg.Pool({
  connectionString: databaseURL
});

// pool.on('connect', (client) => {
//   client.query(`SET apikey TO ${APIkey}`);
// });