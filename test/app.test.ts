import { app } from "../src/app";
import request from "supertest";

describe("Home Api", () => {
  test("Validate response", async () => {
    let response = request(app).get("/api");
    expect((await response).statusCode).toBe(200);
  });
});
