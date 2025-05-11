import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Title bussines")
    .items([
      S.documentTypeListItem("project").title("Projets"),
      S.documentTypeListItem("tag").title("Étiquettes"),
      S.documentTypeListItem("location").title("Lieux"),
      S.documentTypeListItem("category").title("Catégorie"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["project", "tag", "location", "category"].includes(item.getId()!)
      ),
    ]);
