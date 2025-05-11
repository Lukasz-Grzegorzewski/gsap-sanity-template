import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const tagType = defineType({
  name: "tag",
  title: "Etiquette",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
    }),
  ],
});
