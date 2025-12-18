import express from 'express';
import {
    inserirUsuarios
} from '../Controllers/usuariosController.js'

const router = express.Router();

router.post('/cadastrar', inserirUsuarios)

export default router;