import { Router } from "express";
const router = Router()

import { CreateUsuarioController } from "../controllers/usuarioController";
const usuarioController = new CreateUsuarioController()

router.post('/crearTipoUsuario',usuarioController.crearTipoUsuario)

export default router;