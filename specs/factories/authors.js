module.exports = (factory, Models) => {
  factory.define("Author", Models.Author, {
    name: "Mathias",
    createdAt: new Date(),
    updatedAt: new Date()
  });
};
