const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Proyecto DevOps funcionando correctamente");
});

app.get("/health", (req, res) => {

    res.status(200).json({
        status: "OK",
        application: "Proyecto DevOps",
        version: "1.0",
        environment: process.env.NODE_ENV || "development"
    });

});

app.get("/api/info", (req, res) => {

    res.json({
        proyecto: "Proyecto Final DevOps",
        version: "1.0",
        autor: "Cheman",
        estado: "Activo"
    });

});

const PORT = 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en puerto ${PORT}`);
    });
}

module.exports = app;