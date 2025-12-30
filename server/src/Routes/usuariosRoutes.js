import express from 'express';
import {
    inserirUsuarios,
    loginUsuarios
} from '../Controllers/usuariosController.js';

const router = express.Router();

router.post('/cadastrar', inserirUsuarios);
router.post('/login', loginUsuarios);

export default router;