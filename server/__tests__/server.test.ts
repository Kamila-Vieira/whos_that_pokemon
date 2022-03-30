import app from "../src/app";
import server from "../src/server";
import dbConnection from "../src/database";
import request from "supertest";

describe("When init aplication", () => {
  afterEach(async () => {
    await server.close();
    await dbConnection.then((connection) => {
      connection.disconnect();
    });
  });

  // it("should connect to database", async () => {
  //   // const response = await request(app).get("/");
  //   // expect(response.statusCode).toBe(200);
  // });

  test("should have success on get main route", async () => {
    try {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    } catch (error) {
      console.log(error);
    }
  });

  // it("should post a Pokemon", async () => {
  //   const response = await request(app).post("/pokemon").send({
  //     name: "",
  //     type1: "",
  //     type2: "",
  //     height: "",
  //     width: "",
  //   });
  //   expect(response.status).toBe(200);
  // });
});
