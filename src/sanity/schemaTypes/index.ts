import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { tagType } from "./tagType";
import { projetType } from "./projectType";
import { locationType } from "./locationType";
import { categoryType } from "./categoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, tagType, projetType, locationType, categoryType],
};
