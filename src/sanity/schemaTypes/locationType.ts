import { MarkerIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const locationType = defineType({
  name: "location",
  title: "Lieu",
  type: "document",
  icon: MarkerIcon,
  fields: [
    defineField({
      name: "city",
      title: "Ville",
      type: "string",
    }),
  ],
});
