import prisma from "../prisma"

interface TipoUsuario{
    nombre:string,
    parametro_edit_config:boolean
}
interface Usuario{
    nombre_usuario:string,
    email:string,
    constrasena:string,
    id_tipo_usuario:number
}

class CreateUsuarioRepositorie{
    async crearTipoUsuario(tipoUsuario:TipoUsuario){
        await prisma.tipoUsuario.create({
            data:{
                nombre:tipoUsuario.nombre,
                parametro_edit_config:tipoUsuario.parametro_edit_config
            }
        })
    }

    async crearUsuario(usuario:Usuario){
        await prisma.usuario.create({
            data:usuario
        })
    }

    //VERIFICACIONES
    async verificarDuplicidadTipoUsuario(nombre:string){
        const dbResponse = await prisma.tipoUsuario.findMany({
            where:{
                nombre:nombre
            }
        })

        return dbResponse.length > 0
    }

    async verificarEmailExiste(email:string){
        const dbResponse = await prisma.usuario.findMany({
            where:{
                email:email
            }
        })
        return dbResponse.length > 0
    }

    async verificarUsuarioExiste(nombre:string){
        const dbResponse = await prisma.usuario.findMany({
            where:{
                nombre_usuario:nombre
            }
        })
        return dbResponse.length > 0
    }
}

export {CreateUsuarioRepositorie,TipoUsuario,Usuario}