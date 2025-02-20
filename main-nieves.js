const usuarios = [
    { usuario: "admin", contraseña: "1234" },
    { usuario: "usuario1", contraseña: "abcd" },
    { usuario: "usuario2", contraseña: "clave" }
];

function validarUsuario(usuario, contraseña) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuario && usuarios[i].contraseña === contraseña) {
            return true;
        }
    }
    return false;
}

function iniciarSesion() {
    let intentos = 3;
    while (intentos > 0) {
        let usuario = prompt("Ingrese su usuario:");
        let contraseña = prompt("Ingrese su contraseña:");

        if (validarUsuario(usuario, contraseña)) {
            alert("¡Ingresaste correctamente!");
            return;
        } else {
            intentos--;
            alert(`Usuario o contraseña incorrectos. Intentos restantes: ${intentos}`);
        }
    }
    alert("Agotaste tus intentos. Cuenta bloqueada.");
}

do {
    let opcion = prompt("¿Queres iniciar sesión? (si/no)").toLowerCase();
    if (opcion === "si") {
        iniciarSesion();
        break;
    } else if (opcion === "no") {
        alert("Nos vemos");
        break;
    } else {
        alert("Opción no válida, intenta otra vez");
    }
} while (true);
