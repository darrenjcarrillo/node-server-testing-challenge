const request = require("supertest");

const server = require("./server.js");

it("should set db environment to testing", function() {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("server", function() {
  describe("GET /", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});

describe("server", function() {
  describe("POST /users/", function() {
    it("should return 200 OK", function() {
      return request(server)
        .post("/api/users")
        .send({ name: "HELLO" })
        .then(res => {
          expect(res.status).toBe(300);
        });
    });
  });
});

// describe("server", function() {
//   describe("DELETE /", function() {
//     it("should return 200 OK", function() {
//       return request(server)
//         .post("/api/users")
//         .send({ name: "HELLO" })
//         .then(res => {
//           expect(res.status).toBe(200);
//         });
//     });
//   });
// });
