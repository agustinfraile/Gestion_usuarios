class Usuario {

    // Constructor
    constructor(nombre, contrasena) {
        this.nombre = nombre;
        this.contrasena = contrasena;
    }

    // Metodos
    verPerfilUsuario() {
        console.log(
            `Hola! ${this.nombre}👋🏻, bienvenido a tu perfil de usuario.`
        );
    }

    editarPerfilUsuario(nuevoNombreUsuario) {
        this.nombre = nuevoNombreUsuario;
        console.log('-'.repeat(50));
        console.log(`📌Nombre actualizado: ${this.nombre}`);
        console.log('-'.repeat(50));
    }

}

export default Usuario;