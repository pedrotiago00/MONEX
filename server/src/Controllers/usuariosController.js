import express from 'express';
import jwt from 'jsonwebtoken';
import pool from '../../database.js'
import bcrypt from 'bcrypt'

export const inserirUsuarios = async (req, res) => {
    const { username, senha } = req.body;

    const [existing] = await pool.query(
        'SELECT * FROM usuarios WHERE username = ?', [username]
    )

    if (existing.length > 0) {
        return res.status(400).json({ message: 'Usuario já cadastrado' })
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    await pool.query(
        "INSERT INTO usuarios (username, senha) VALUES (?, ?)",
        [username, hashedPassword]
    );
    res.json({message: 'Usuario cadastrado com sucesso'});
};

export const loginUsuarios = async (req, res) => {
    const { username, senha } = req.body;
    const [users] = await pool.query(
        'SELECT * FROM usuarios WHERE username = ?', [username]
    );
    const user = users[0] ?? null;

    if (user == null) {
        return res.status(400).json({ message: 'Usuario não encontrado' });
    };

    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) {
        return res.status(400).json( { message: 'Senha incorreta' } );
    };

    await pool.query(
        'UPDATE usuarios SET last_login = NOW() WHERE id_usuario = ?',
        [user.id_usuario]
    );

    const token = jwt.sign({ id: user.id_usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, username: user.username });
};