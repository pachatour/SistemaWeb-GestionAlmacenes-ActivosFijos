import prismaClient from "../../src/prisma";

async function SeedCrearTipoUsuario() {
    const count = await prismaClient.tipoUsuario.count();
    if (count === 0){
        await prismaClient.tipoUsuario.createMany({
            data:[
                {nombre:"Administrador",parametro_edit_config:true},
                {nombre:"Profesor",parametro_edit_config:false},
                {nombre:"Inventario",parametro_edit_config:true}
            ]
        });
    }
}

SeedCrearTipoUsuario()