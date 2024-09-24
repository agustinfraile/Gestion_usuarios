import readlineSync from "readline-sync";
import { buscarUsuarios, crearNuevoUsuario, editarPerfil, eliminarUsuario, iniciarSesion, verPerfil } from "./logicaUsuario.js";



function menu() {
    let opcionElejida;

    do {
        console.log('\nMenu de opciones');
        console.log('1. Crear usuario');
        console.log('2. Iniciar sesion');
        console.log('3. Ver perfil');
        console.log('4. Editar perfil');
        console.log('5. Eliminar usuario');
        console.log('6. Buscar usuarios');
        console.log('7. Salir');

        opcionElejida = readlineSync.questionInt('Seleccione una opcion: ');

        switch (opcionElejida) {
            case 1:
                crearNuevoUsuario();
                break;
            case 2:
                iniciarSesion();
                break;
            case 3:
                verPerfil();
                break;
            case 4:
                editarPerfil();
                break;
            case 5:
                eliminarUsuario();
                break;
            case 6:
                buscarUsuarios();
                break;
            case 7:
                console.log(`👋🏻Saliendo...👋🏻`);
                break;
            default:
                console.log('❌Opcion invalida❌');
        }
    } while (opcionElejida !== 7);
}

menu();