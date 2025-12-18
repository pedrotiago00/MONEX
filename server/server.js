import express from 'express';
import cors from "cors";

import usuariosRoutes from './src/Routes/usuariosRoutes.js'

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/api", usuariosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});