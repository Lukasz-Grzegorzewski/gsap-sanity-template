import { CubeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const projetType = defineType({
  name: "project",
  title: "Projet",
  type: "document",
  icon: CubeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "location",
      title: "Lieu",
      type: "reference",
      to: { type: "location" },
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "reference",
      to: { type: "category" },
    }),
    defineField({
      name: "tags",
      title: "Étiquettes",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "tag" } })],
    }),
    defineField({
      name: "images",
      title: "Galerie d'images",
      type: "array",
      of: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true, // Optional for better image cropping
          },
          fields: [
            defineField({
              name: "alt",
              title: "Texte Alternatif",
              type: "string",
              description: "Description de l'image pour l'accessibilité",
              validation: (Rule) =>
                Rule.required().error("Le texte alternatif est requis"),
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "workDate",
      title: "Date De Travaux",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      location: "location.city",
      workDate: "workDate",
      image: "images.0.asset",
    },
    prepare(selection) {
      const { location, image } = selection;

      return {
        ...selection,
        media: image || CubeIcon,
        subtitle: `${location} - ${new Date(
          selection.workDate
        ).toLocaleDateString("fr-FR")}`,
      };
    },
  },
});
