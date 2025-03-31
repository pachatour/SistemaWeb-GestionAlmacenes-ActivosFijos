import { Request,Response } from "express"
import { CreateUsuarioService } from "../services/usuarioService"

class CreateUsuarioController{

    async crearTipoUsuario(req:Request,res:Response){
        const usuarioService = new CreateUsuarioService()
        const tipoUsuario = req.body
        try{
            await usuarioService.crearTipoUsuario(tipoUsuario)
            res.status(200).json({message:"Usuario Creado con exito!"})
        }catch(error){
            if(error instanceof Error){
                res.status(500).json({message:error.message})
            }else{
                res.status(500).json({message:"Error al crear tipo de usuario"})
            } 
        }
    }

    async crearUsuario(req:Request,res:Response){
        const usuarioService = new CreateUsuarioService()
        const usuario = req.body

        try{
            await usuarioService.crearUsuario(usuario);
            res.status(200).json({message:"Usuario creado con exito"})
        }catch (error){
            if(error instanceof Error){
                res.status(500).json({message:error.message})
            }else{
                res.status(500).json({message:"Error al crear usuario"})
            }
        }
    }

    
}



export {CreateUsuarioController}