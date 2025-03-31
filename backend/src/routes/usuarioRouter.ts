import { Router } from "express";
const router = Router()

import { CreateUsuarioController } from "../controllers/usuarioController";
const usuarioController = new CreateUsuarioController()

router.post('/crearTipoUsuario',usuarioController.crearTipoUsuario)
router.post('/crearUsuario',usuarioController.crearUsuario)

export default router;