import pool from '../../database.js'
const bcrypt = require('bcrypt')

export const inserirUsuarios = async (req, res) => {
    const { username, senha } = req.body;

    try{
        await pool.query(
            "INSERT INTO usuarios (username, senha) VALUES (?, ?)",
            [username, senha]
        );

        res.status(201).json({ message: "Usuário criado com sucesso"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro no banco de dados"})
    }
}