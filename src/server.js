import express from "express";
import { config } from "dotenv";
import cors from "cors";
import routes from "./routes/index.routes.js";

config(); // 🌱 Carregando variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4001; // 🚪 Definindo a porta do servidor

// 🚀 Inicializando o Express
const app = express();
app.use(cors()); // 🌐 Habilitando CORS para todas as rotas
app.use(express.json()); // 📦 Habilitando o uso de JSON

// 📝 Middleware para logar informações de cada requisição
app.use((req, res, next) => {
  console.log(`📅 [${new Date().toISOString()}] 🛠️ ${req.method} ${req.url}`);
  console.log("📋 Headers:", req.headers);
  console.log("📦 Body:", req.body);
  console.log("🔍 Query Params:", req.query);
  next();
});

app.use("/", routes); // 🛤️ Configurando as rotas

// 🌟 Iniciando o servidor
const server = app.listen(port, () => {
  console.log(`✅ Servidor rodando na porta ${port}`);
  console.log(`🌐 Acesse http://localhost:${port} para interagir com a API.`);
});

// 🛑 Capturar evento de encerramento do servidor
process.on("SIGINT", () => {
  console.log("\n👋 Servidor encerrado. Até a próxima!");
  server.close(() => process.exit(0));
});