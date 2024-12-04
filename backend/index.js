const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require("cors");  // Importa o CORS

const uri = "mongodb+srv://admin:admin1234@fixit.cqr91.mongodb.net/?retryWrites=true&w=majority&appName=FixIt";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const app = express();

// Configura o CORS para aceitar requisições de qualquer origem (ou do seu frontend específico)
app.use(cors({
  origin: 'http://localhost:5173', // Permite apenas o frontend em localhost:5173
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

app.use(bodyParser.json()); // Para processar o corpo das requisições em JSON

// Rota para cadastrar um novo cliente
app.post("/clientes", async (req, res) => {
  const { nome, email, cpf, cep, municipio, senha } = req.body;

  // Validando os dados recebidos
  if (!nome || !email || !cpf || !cep || !municipio || !senha) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    await client.connect();
    const db = client.db("FixIt");
    const clientesCollection = db.collection("clientes");

    // Verifica se já existe um cliente com o mesmo CPF ou email
    const clienteExistente = await clientesCollection.findOne({ $or: [{ cpf }, { email }] });
    if (clienteExistente) {
      return res.status(400).json({ error: "CPF ou e-mail já cadastrados." });
    }

    // Adiciona o cliente na base de dados
    const resultado = await clientesCollection.insertOne({ nome, email, cpf, cep, municipio, senha });
    res.status(201).json({ message: "Cadastro realizado com sucesso", id: resultado.insertedId });
  } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
    res.status(500).json({ error: "Erro ao cadastrar cliente. Tente novamente." });
  } finally {
    await client.close();
  }
});

// Rota para login (usando GET)
app.get("/clientes", async (req, res) => {
  const { email } = req.query; // Obtém o e-mail da query string

  try {
    await client.connect();
    const db = client.db("FixIt");
    const clientesCollection = db.collection("clientes");

    // Encontra o cliente pelo e-mail
    const cliente = await clientesCollection.findOne({ email });

    if (cliente) {
      res.status(200).json(cliente); // Retorna o cliente se encontrado
    } else {
      res.status(404).json({ error: "Cliente não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao buscar cliente:", error);
    res.status(500).json({ error: "Erro ao buscar cliente" });
  } finally {
    await client.close();
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});