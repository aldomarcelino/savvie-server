const app = require("../app");
const request = require("supertest");
const { sequelize, Category  } = require("../models");
const { queryInterface } = sequelize;

jest.setTimeout(1000);

const user_access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyZXNjdWVmb29kQGdtYWlsLmNvbSIsImlhdCI6MTY2NzgwMzczOH0.4MmXjVEcOLYdNmEwqY4hrLqBBoOGE3OpVx3OVepg2OQ";

    // describe("Basket Routes Test", () => {
    //     describe("POST /basket/:id - create new basket", () => {
    //         test("201 Success added basket - should create new basket", (done) => {
    //             request(app)
    //                 .post("/basket/14")
    //                 .set({ access_token: user_access_token })
    //                 .then((response) => {
    //                 const { body, status } = response;
    //                 expect(status).toBe(201);
    //                 expect(body).toBeInstanceOf(Object);
    //                 expect(body).toHaveProperty("quantity", expect.any(Number));
    //                 expect(body).toHaveProperty("comition", expect.any(Number));
    //                 expect(body).toHaveProperty("FoodId", expect.any(Number));
    //                 expect(body).toHaveProperty("UserId", expect.any(Number));
    //                 return done();
    //                 })
    //                 .catch((err) => {
    //                 done(err);
    //                 });
    //         });

    //         test("401 Failed added basket - invalid token - should return error unauthorized", (done) => {
    //             request(app)
    //                 .post("/basket/14")
    //                 .set("access_token", "ini invalid token")
    //                 .then((response) => {
    //                 const { body, status } = response;
    //                 expect(status).toBe(401);
    //                 expect(body).toHaveProperty("message", "Invalid token");
    //                 return done();
    //                 })
    //                 .catch((err) => {
    //                 done(err);
    //                 });
    //             });
    //     })

    //     describe("GET /basket - return data all basket", () => {
    //         test("200 Success get basket, return object", (done) => {
    //             request(app)
    //                 .get("/basket")
    //                 .set({ access_token: user_access_token })
    //                 .then((response) => {
    //                 const { body, status } = response;
    //                 expect(status).toBe(200);
    //                 expect(body[0]).toBeInstanceOf(Object);
    //                 expect(body[0]).toHaveProperty("UserId", expect.any(Number));
    //                 expect(body[0]).toHaveProperty("FoodId", expect.any(Number));
    //                 expect(body[0]).toHaveProperty("comition", expect.any(Number));
    //                 done();
    //                 })
    //                 .catch((err) => {
    //                 done(err);
    //                 });
    //             });

    //         test("401 Failed get basket - invalid token - should return error unauthorized", (done) => {
    //             request(app)
    //             .get("/basket")
    //                 .set("access_token", "ini invalid token")
    //                 .then((response) => {
    //                 const { body, status } = response;
    //                 expect(status).toBe(401);
    //                 expect(body).toHaveProperty("message", "Invalid token");
    //                 return done();
    //                 })
    //                 .catch((err) => {
    //                 done(err);
    //                 });
    //             });
    //     })

    //     describe("PATCH /basket/:id - edit basket to change quantity value", () => {
    //         test("200 success change quantity food", (done) => {
    //         request(app)
    //             .patch("/basket/1")
    //             .send({
    //                 quantity: 5
    //             })
    //             .set("access_token", user_access_token)
    //             .then((response) => {
    //             const { body, status } = response;
    //             expect(status).toBe(200);
    //             expect(body).toHaveProperty("message", expect.any(String));
    //             done();
    //             })
    //             .catch((err) => {
    //             done(err);
    //             });
    //         });
    
    //         test("401 Failed change quantity food - invalid token - should return error unauthorized", (done) => {
    //         request(app)
    //             .patch("/basket/1")
    //             .set("access_token", "ini invalid token")
    //             .then((response) => {
    //             const { body, status } = response;
    //             expect(status).toBe(401);
    //             expect(body).toHaveProperty("message", "Invalid token");
    //             return done();
    //             })
    //             .catch((err) => {
    //             done(err);
    //             });
    //         });
    //     });

    //     describe("DELETE /basket/:id - delete basket by id", () => {
    //         test("200 Success deleted basket", (done) => {
    //         request(app)
    //             .delete("/basket/1")
    //             .set({ access_token: user_access_token })
    //             .then((response) => {
    //             const { body, status } = response;
    //             expect(status).toBe(200);
    //             expect(body).toHaveProperty("message", expect.any(String));
    //             return done();
    //             })
    //             .catch((err) => {
    //             done(err);
    //             });
    //         });
    
    //         test("401 Failed deleted basket - invalid token - should return error unauthorized", (done) => {
    //         request(app)
    //             .delete("/basket/1")
    //             .set("access_token", "ini invalid token")
    //             .then((response) => {
    //             const { body, status } = response;
    //             expect(status).toBe(401);
    //             expect(body).toHaveProperty("message", "Invalid token");
    //             return done();
    //             })
    //             .catch((err) => {
    //             done(err);
    //             });
    //         });
    //     });
    // })