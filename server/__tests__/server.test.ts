import app from "../src/app";
import server from "../src/server";
import request from "supertest";
import mongoose from "mongoose";

describe("When init aplication", () => {
  afterEach(async () => {
    await server.close();
    await mongoose.connection.close();
  });

  test("should have success on get main route", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("should show welcome message on get main route", async () => {
    const response = await request(app).get("/");
    expect(response.body).toHaveProperty("message");
  });
});
