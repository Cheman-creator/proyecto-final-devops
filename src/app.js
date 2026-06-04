const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo");
});

const PORT = 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en puerto ${PORT}`);
    });
}

module.exports = app;