const request = require("supertest");
const app = require("../src/app");

describe("Prueba de la ruta principal", () => {

    test("Debe responder correctamente", async () => {

        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

        expect(response.text).toBe(
            "Proyecto DevOps funcionando correctamente"
        );

    });

    test("Health check debe responder correctamente", async () => {

        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);

        expect(response.body.status).toBe("OK");
        expect(response.body.application).toBe("Proyecto DevOps");

    });

    test("API info debe responder correctamente", async () => {

        const response = await request(app).get("/api/info");

        expect(response.statusCode).toBe(200);

        expect(response.body.proyecto)
            .toBe("Proyecto Final DevOps");

    });

});