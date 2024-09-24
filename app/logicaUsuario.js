import Usuario from "./Usuario.js";
import readlineSync from 'readline-sync';



let arrayDeUsuarios = [];

export const crearNuevoUsuario = () => {
    let nombreDeUsuarioIngresado = readlineSync.question('🔐Ingrese su nombre de usuario: 🔐');

    let contrasenaIngresada = readlineSync.question('🔐Ingrese su contraseña: 🔐');

    let nuevoUsuario = new Usuario(nombreDeUsuarioIngresado, contrasenaIngresada);

    arrayDeUsuarios.push(nuevoUsuario);
    console.log('-'.repeat(50));
    console.log(`🎉Usuario ${nombreDeUsuarioIngresado} creado con exito🎉`);
    console.log('-'.repeat(50));
}

export const iniciarSesion = () => {
    let nombreDeUsuarioIngresado = readlineSync.question('🔐Ingrese su nombre de usuario: 🔐');

    let contrasenaIngresada = readlineSync.question('🔐Ingrese su contraseña: 🔐');

    let usuarioEncontrado = arrayDeUsuarios.find(usuario => usuario.nombre === nombreDeUsuarioIngresado && usuario.contrasena === contrasenaIngresada);

    if (usuarioEncontrado) {
        console.log('-'.repeat(50));
        console.log(`🎉Bienvenido ${nombreDeUsuarioIngresado}🎉`);
        console.log('-'.repeat(50));
    } else {
        console.log('-'.repeat(50));
        console.log('❌Nombre de usuario o contraseña incorrectos❌');
        console.log('-'.repeat(50));
    }
}

export const verPerfil = () => {
    if (arrayDeUsuarios.length === 0) {
        console.log('-'.repeat(50));
        console.log('❌No hay usuarios registrados❌');
        console.log('-'.repeat(50));
        return;
    }

    let nombreDeUsuarioIngresado = readlineSync.question('🔍Ingrese su nombre de usuario: 🔍');

    let usuarioEncontrado = arrayDeUsuarios.find(usuario => usuario.nombre === nombreDeUsuarioIngresado);

    if (usuarioEncontrado) {
        console.log('-'.repeat(50));
        console.log(`📌Nombre: ${usuarioEncontrado.nombre}`);
        console.log('-'.repeat(50));
    } else {
        console.log('-'.repeat(50));
        console.log('❌Usuario no encontrado❌');
        console.log('-'.repeat(50));
    }
}

export const editarPerfil = () => {
    if (arrayDeUsuarios.length === 0) {
        console.log('-'.repeat(50));
        console.log('❌No hay usuarios registrados❌');
        console.log('-'.repeat(50));
        return;
    }

    let nombreDeUsuarioIngresado = readlineSync.question('🔍Ingrese su nombre de usuario: 🔍');

    let usuarioEncontrado = arrayDeUsuarios.find(usuario => usuario.nombre === nombreDeUsuarioIngresado);

    if (usuarioEncontrado) {
        let nuevoNombreDeUsuario = readlineSync.question('🔍Ingrese su nuevo nombre de usuario: 🔍');
        usuarioEncontrado.editarPerfilUsuario(nuevoNombreDeUsuario);
    } else {
        console.log('-'.repeat(50));
        console.log('❌Usuario no encontrado❌');
        console.log('-'.repeat(50));
    }
}

export const eliminarUsuario = () => {
    if (arrayDeUsuarios.length === 0) {
        console.log('-'.repeat(50));
        console.log('❌No hay usuarios registrados❌');
        console.log('-'.repeat(50));
        return;
    }

    let nombreDeUsuarioIngresado = readlineSync.question('🔍Ingrese su nombre de usuario: 🔍');

    let indiceUsuarioEncontrado = arrayDeUsuarios.findIndex(usuario => usuario.nombre === nombreDeUsuarioIngresado);

    if (indiceUsuarioEncontrado !== -1) {
        arrayDeUsuarios.splice(indiceUsuarioEncontrado, 1);
        console.log('-'.repeat(50));
        console.log(`🗑️Usuario ${nombreDeUsuarioIngresado} eliminado con exito🗑️`);
        console.log('-'.repeat(50));
    } else {
        console.log('-'.repeat(50));
        console.log('❌Usuario no encontrado❌');
        console.log('-'.repeat(50));
    }
}

export const buscarUsuarios = () => {
    if (arrayDeUsuarios.length === 0) {
        console.log('-'.repeat(50));
        console.log('❌No hay usuarios registrados❌');
        console.log('-'.repeat(50));
        return;
    }

    let nombreDeUsuarioIngresado = readlineSync.question('🔍Ingrese su nombre de usuario: 🔍');

    let usuarioEncontrado = arrayDeUsuarios.find(usuario => usuario.nombre === nombreDeUsuarioIngresado);

    if (usuarioEncontrado) {
        console.log('-'.repeat(50));
        console.log(`📌Nombre: ${usuarioEncontrado.nombre}`);
        console.log('-'.repeat(50));
    } else {
        console.log('-'.repeat(50));
        console.log('❌Usuario no encontrado❌');
        console.log('-'.repeat(50));
    }
}