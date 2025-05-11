import { defineMigration, at, set } from "sanity/migrate";

const oldType = "author";
const newType = "city";

export default defineMigration({
  title: "author to city",
  documentTypes: ["author"],

  migrate: {
    object(object) {
      if (object._type === oldType) {
        return at("_type", set(newType));
      }
    },
  },
});
