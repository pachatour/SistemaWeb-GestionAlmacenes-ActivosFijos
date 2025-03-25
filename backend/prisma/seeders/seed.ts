import prismaClient from "../../src/prisma";

async function SeedCrearTipoUsuario() {
    await prismaClient.tipoUsuario.createMany({
        data:[
            {nombre:"Administrador",parametro_edit_config:true},
            {nombre:"Profesor",parametro_edit_config:false},
            {nombre:"Inventario",parametro_edit_config:true}
        ]
    })
}

SeedCrearTipoUsuario()