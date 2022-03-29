import server from "../src/server";
import request from "supertest";

describe("When init aplication", () => {
  afterEach(() => server.close());

  // it("should connect to database", async () => {
  //   // const response = await request(app).get("/");
  //   // expect(response.statusCode).toBe(200);
  // });

  it("should have success on get main route", async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toBe(200);
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
