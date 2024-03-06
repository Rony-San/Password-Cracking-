const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Servir el archivo "index.html" desde el directorio "public" en la raíz
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta para manejar las solicitudes POST al iniciar sesión
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "chocolate") {
    res.redirect("/landing_page.html");
  } else {
    res.status(401).send("Credenciales incorrectas. Inténtalo de nuevo.");
  }
});

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, "public")));

// Escuchar en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
