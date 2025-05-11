// const { client } = require("./client");

// const clientB = clientCreate({
//   projectId: process.env.SANITY_PROJECT_ID,
//   dataset: process.env.SANITY_DATASET,
//   token: process.env.SANITY_EDITOR_TOKEN,
//   apiVersion: "2025-04-03",
//   useCdn: false,
// });

async function deleteOrderByUserId() {
  try {
    // Step 1: Fetch all "city" documents
    const query = '*[_type == "order"].'; // GROQ query to find all "orders" documents
    const allCities = await client.fetch(query);

    // Step 2: Delete each "city" document by its _id

    const deletePromises: Promise<void>[] = allCities.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (city: any) => client.delete(city._id) // Deleting each city document by ID
    );

    await Promise.all(deletePromises);
    console.log('All "city" documents have been deleted.');
  } catch (error) {
    console.error("Error deleting documents:", error);
  }
}

deleteOrderByUserId();
