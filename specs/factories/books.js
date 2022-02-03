module.exports = (factory, Models) => {
  factory.define("Book", Models.Book, {
    title: "My awesome Book",
    author: "Mathias",
    createdAt: new Date(),
    updatedAt: new Date()
  });
};
