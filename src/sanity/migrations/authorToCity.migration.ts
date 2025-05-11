/* eslint-disable @typescript-eslint/no-require-imports */
const { createClient } = require("@sanity/client");
require("dotenv").config();

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_EDITOR_TOKEN,
  apiVersion: "2025-04-03",
  useCdn: false,
});

async function migrateAuthorsToCities() {
  let authors = await client.fetch(`*[_type == "author"]`);

  for (const author of authors) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, _rev, ...rest } = author;

    await client.create({
      ...rest,
      _id: `city.${_id}`, // or let Sanity auto-generate
      _type: "city",
    });

    await client.delete(_id);
    console.log(`Migrated ${_id}`);
  }

  authors = await client.fetch(`*[_type == "author"]`);

  if (authors.length === 0) {
    const authorsId = await client.fetch(`*[_type == "author"]._id`);
    await client.delete(authorsId);
    console.log(`Type author with id: ${authorsId} was deleted`);
  }
}

migrateAuthorsToCities();
