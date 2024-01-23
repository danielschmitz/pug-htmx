const express = require("express");
const path = require("path");

const app = express();

// Configuração do Pug como mecanismo de modelo
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware para servir arquivos estáticos
app.use("/public", express.static(path.join(__dirname, "public")));

// Rota para a página inicial
app.get("/", (req, res) => {
  res.render("index");
});

// Rota para a página 1
app.get("/pagina1", (req, res) => {
  res.render("pagina1");
});

// Rota para a página 2
app.get("/pagina2", (req, res) => {
  res.render("pagina2");
});

// Rota para lidar com o envio do formulário
app.post("/submitForm", express.urlencoded({ extended: true }), (req, res) => {
  const { nome, telefone } = req.body;
  // Aqui, você pode processar os dados do formulário como desejado
  res.json({ message: "Formulário enviado com sucesso!", nome, telefone });
});

// Inicie o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express.js está ouvindo na porta ${PORT}`);
});
