const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require('../app');
const requestWithSupertest = supertest(app);
require("dotenv").config();

describe('Restaurant Endpoints', () => {
    /* Connecting to the database before each test. */
    beforeEach(async () => {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    /* Closing database connection after each test. */
    afterEach(async () => {
        await mongoose.connection.close();
    });


    describe("GET /api/restaurants", () => {
        it("should return all restaurants", async () => {
            const res = await requestWithSupertest.get('/api/restaurants');
            expect(res.status).toEqual(200);
            expect(res.type).toEqual(expect.stringContaining('json'));
            expect(res.body.length).toBeGreaterThan(0);
        });
    });
});
