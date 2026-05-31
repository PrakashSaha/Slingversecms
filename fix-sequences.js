const { Client } = require('pg');

const databaseUrl = process.env.DATABASE_URL

async function main() {
  const client = new Client({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false }
  });
  await client.connect();
  console.log('Connected to database');

  // List all tables
  const tablesRes = await client.query(`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema='public'
  `);
  const tables = tablesRes.rows.map(r => r.table_name);

  for (const table of tables) {
    // Check if table has an "id" column
    const colsRes = await client.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_schema='public' AND table_name=$1 AND column_name='id'
    `, [table]);

    if (colsRes.rows.length > 0) {
      try {
        // Find if there is a sequence for this table
        const seqRes = await client.query(`
          SELECT pg_get_serial_sequence($1, 'id') AS seq
        `, [`"${table}"`]);
        const seqName = seqRes.rows[0]?.seq;

        if (seqName) {
          console.log(`Resetting sequence ${seqName} for table ${table}...`);
          await client.query(`
            SELECT setval($1, COALESCE((SELECT MAX(id) FROM "${table}"), 0) + 1, false)
          `, [seqName]);
        } else {
          // Fallback guess sequence name
          const guessedSeq = `"${table}_id_seq"`;
          console.log(`No formal serial sequence found for ${table}, trying guessed sequence ${guessedSeq}...`);
          try {
            await client.query(`
              SELECT setval($1, COALESCE((SELECT MAX(id) FROM "${table}"), 0) + 1, false)
            `, [guessedSeq]);
          } catch (e) {
            // ignore if sequence doesn't exist
          }
        }
      } catch (e) {
        console.error(`Failed to reset sequence for table ${table}:`, e.message);
      }
    }
  }

  console.log('Sequences successfully synchronized!');
  await client.end();
}

main().catch(console.error);
