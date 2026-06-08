const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Proyecto DevOps funcionando correctamente");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        application: "Proyecto DevOps",
        version: "1.0"
    });
});

const PORT = 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en puerto ${PORT}`);
    });
}

module.exports = app;