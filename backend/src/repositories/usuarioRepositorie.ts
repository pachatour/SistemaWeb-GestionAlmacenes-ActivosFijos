import prisma from "../prisma"

interface TipoUsuario{
    nombre:string,
    parametro_edit_config:boolean
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

    async verificarDuplicidadTipoUsuario(nombre:string){
        const dbResponse = await prisma.tipoUsuario.findMany({
            where:{
                nombre:nombre
            }
        })

        return dbResponse.length > 0
    }
}

export {CreateUsuarioRepositorie,TipoUsuario}