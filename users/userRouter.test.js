const request = require("supertest");

// const {insert} = require("./usersModel.js");
const Users = require("./usersModel.js");

const router = require("./userRouter.js");

describe("Post a user", function() {
  describe("POST /users", function() {
    it("should return 200 OK", async function() {
      const res = await request(router)
        .post("/users")
        .send({
          name: "DARREBASDASDS"
        });
      expect(200);
    });
  });
});
