export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" }
    },
    {
      name: "url",
      title: "Website Url",
      type: "string"
    },
    {
      name: "backImage",
      title: "Back Image",
      type: "image"
    },
    {
      name: "frontImage",
      title: "Front Image",
      type: "image"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    }
  ]
};
