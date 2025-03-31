import { validate } from "email-validator";
import { CreateUsuarioRepositorie,TipoUsuario,Usuario } from "../repositories/usuarioRepositorie"
import { hash } from "bcryptjs";


class CreateUsuarioService{
    //crear TIPO USUARIO
    async crearTipoUsuario(tipoUsuario:TipoUsuario){
        const usuarioRepositorie = new CreateUsuarioRepositorie();
        const nombreTipoUsuarioExiste = await usuarioRepositorie.verificarDuplicidadTipoUsuario(tipoUsuario.nombre);
        if(nombreTipoUsuarioExiste){
            throw new Error("Este tipo de usuario ya existe");
        }
        await usuarioRepositorie.crearTipoUsuario(tipoUsuario);
    }

    //crear USUARIO
    async crearUsuario(usuario:Usuario){
        const usuarioRepositorie = new CreateUsuarioRepositorie()
        const emailExiste = await usuarioRepositorie.verificarEmailExiste(usuario.email);
        if(emailExiste){
            throw new Error('El email ya esta en uso');
        }

        const usuarioExiste = await usuarioRepositorie.verificarUsuarioExiste(usuario.nombre_usuario);

        if(usuarioExiste){
            throw new Error('El nombre de usuario ya esta registrado')
        }

        if(!validate(usuario.email)){
            throw new Error('Email invalido')
        }

        //hashear encryptar contrasena
        usuario.constrasena = await hash(usuario.constrasena,8)

        await usuarioRepositorie.crearUsuario(usuario);
    }
}

export {CreateUsuarioService}