const app = require("../app");
const request = require("supertest");
const { sequelize, Food  } = require("../models");
const { queryInterface } = sequelize;

jest.setTimeout(1000);

const user_access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyZXNjdWVmb29kQGdtYWlsLmNvbSIsImlhdCI6MTY2NzY0OTE1Mn0.Sqkgx312hBggjPziUR-QqYZD4mf8Le70OfR_HEyjhG0";

    describe("Checkout Routes Test", () => {
        describe("GET /checkout - return data all foods", () => {

        })
    })