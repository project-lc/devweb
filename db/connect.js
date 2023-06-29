import dotenv from 'dotenv'
dotenv.config()
import pgpkg from 'pg'
const { Client } = pgpkg

async function executeQuery(query, values=null) {
    const client = new pgpkg.Client(`postgres://orffvvia:ix1P4oeL4Q3-rmaLFPUW9pkl1uKeEkem@silly.db.elephantsql.com/orffvvia`);
    await client.connect()
    const res = await client.query(query, values)
    client.end()
    return res.rows
}

export { executeQuery }
