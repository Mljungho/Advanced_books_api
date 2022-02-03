const { factory, expect, serverConfig } = require("../../helpers");

let book, response, request;
before((done) => {
  request = serverConfig(done);
});

beforeEach(async () => {
  book = await factory.create("Book", { title: "Fun with Sequelize" });
});

describe.only("GET /api/books/:id", () => {
  beforeEach(async () => {
    response = await request.get(`/api/books/${book.id}`);
  });

  it("is expected to respond with status 200", () => {
    expect(response.status).to.equal(200);
  });

  it("is expected to include the title", () => {
    expect(response.body["book"].title).to.equal("Fun with Sequelize");
  });
});
