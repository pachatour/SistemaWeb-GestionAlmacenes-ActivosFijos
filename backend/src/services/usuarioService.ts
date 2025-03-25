import { CreateUsuarioRepositorie,TipoUsuario } from "../repositories/usuarioRepositorie"


class CreateUsuarioService{
    async crearTipoUsuario(tipoUsuario:TipoUsuario){
        const usuarioRepositorie = new CreateUsuarioRepositorie();
        
        const nombreTipoUsuarioExiste = await usuarioRepositorie.verificarDuplicidadTipoUsuario(tipoUsuario.nombre);
        
        if(nombreTipoUsuarioExiste){
            throw new Error("Este tipo de usuario ya existe");
        }

        await usuarioRepositorie.crearTipoUsuario(tipoUsuario);
    }
}

export {CreateUsuarioService}