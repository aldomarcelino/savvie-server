const app = require("../app");
const request = require("supertest");
const { Volunteer, Admin, Orphan, Match, sequelize } = require("../models");
const {
  signPayloadToToken,
} = require("../helpers/helpers");

const { queryInterface } = sequelize

let validToken, invalidToken;

const admin = {
  email: "lanny@mail.com",
  password: "123456",
  role: "admin",
};

beforeAll((done) => {
  Admin.create(admin)
    .then((adminRegist) => {
      validToken = signPayloadToToken({
        id: adminRegist.id,
        email: adminRegist.email,
      });
      console.log(validToken);
      invalidToken = "123456789eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
      return queryInterface.bulkInsert(
        "Volunteers",
        [
          {
            email: "volunteer12@mail.com",
            password: "123456",
            fullName: "volunteer1",
            imageUrl: "https://test.jpg",
            linkedinUrl: "test.com",
            curriculumVitae: "url.com",
            lastEducation: "SMA",
            createdAt: new Date(),
            updatedAt: new Date(),
            role: "volunteer",
            verified: false,
            matchStatus: "notMatch",
          },
  
          {
            email: "volunteer32@mail.com",
            password: "123456",
            fullName: "volunteer1",
            imageUrl: "https://test.jpg",
            linkedinUrl: "test.com",
            curriculumVitae: "url.com",
            lastEducation: "SMA",
            createdAt: new Date(),
            updatedAt: new Date(),
            role: "volunteer",
            verified: false,
            matchStatus: "notMatch",
          },
        ],
        {}
      );
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
});

afterAll((done) => {
  Admin.destroy({ truncate: true, cascade: true, restartIdentity: true })
    .then(() => {
      return Volunteer.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true,
      });
    })
    .then((_) => {
      return Orphan.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true,
      });
    })
    .then((_) => {
      done();
    })
    .catch((err) => {
      done(err);
    });
});

describe("GET /volunteers", () => {
  describe("Success attempts", () => {
    describe("Fetching with valid token", () => {
      it("Should return status code 200", async () => {
        const response = await request(app)
          .get("/admin/volunteers")
          .set("access_token", validToken);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toBeGreaterThan(0);
      });
    });
  });
  describe("Failed attempts", () => {
    describe("Fetching with invalid token", () => {
      it("Should return status code 401", async () => {
        const response = await request(app)
          .get("/admin/volunteers")
          .set("access_token", invalidToken);
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty("message", "Unauthorized");
      });
    });
  });
});
