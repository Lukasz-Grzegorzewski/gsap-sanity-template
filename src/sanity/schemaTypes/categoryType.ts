import { MasterDetailIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Catégorie",
  type: "document",
  icon: MasterDetailIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
    }),
  ],
});
