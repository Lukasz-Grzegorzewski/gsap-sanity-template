import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const readWriteDevelopperClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_READ_WRITE_DEVELOPPER_TOKEN,
});
