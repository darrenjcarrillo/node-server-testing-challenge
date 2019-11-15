const db = require("../data/dbConfig.js");

const { insert, get, remove } = require("./usersModel.js");

describe("users model", function() {
  describe("insert()", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should insert a get", async function() {
      // insert a user into the db
      await insert({ name: "Darren" });
      // check if it was inserted into the db
      const users = await db("users"); // read from db directly
      expect(users).toHaveLength(1); // at least we know one record was inserted
    });

    // it("should get all users", async function() {
    //   // await insert({ name: "Darren" });
    //   await get();
    //   const users = await db("users");

    //   expect(users).toContain([{ name: "Darren" }]);
    // });

    it("Should delete user", async function() {
      // await insert({ name: "Darren" });
      const users = await db("users");
      await remove({ name: "Darren" });

      expect(users).toHaveLength(0);
    });
  });

  // describe("remove()", function() {
  //   beforeEach(async () => {
  //     await db("users").truncate();
  //   });

  //   it("Should delete user", async function() {
  //     const users = await db("users");
  //     await remove(users.id);

  //     expect(users.id).toBeUndefined(1);
  //   });
  // });
});
