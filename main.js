// DATOS //
const usuarios = [
    { usuario: "admin", contraseña: "1234" },
    { usuario: "usuario1", contraseña: "abcd" },
    { usuario: "usuario2", contraseña: "clave" }
];

const Producto = function(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
};

const listaProductos = [
    new Producto("Labial", 10500, 20),
    new Producto("Base Líquida", 11000, 15),
    new Producto("Rímel Waterproof", 9500, 10),
    new Producto("Paleta de Sombras", 8000, 8)
];

// FUNCIONES DE AUTENTICACION //

function validarUsuario(usuario, contraseña) {
    return usuarios.some(u => u.usuario === usuario && u.contraseña === contraseña);
}

function iniciarSesion() {
    let intentos = 3;
    while (intentos > 0) {
        let usuario = prompt("Ingrese su usuario:");
        let contraseña = prompt("Ingrese su contraseña:");

        if (validarUsuario(usuario, contraseña)) {
            alert("¡Ingresaste correctamente!");
            menuTienda();
            return;
        } else {
            intentos--;
            alert(`Usuario o contraseña incorrectos. Intentos restantes: ${intentos}`);
        }
    }
    alert("Agotaste tus intentos. Cuenta bloqueada.");
}

function iniciarPrograma() {
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
}

// FUNCIONES DE PRODUCTOS //

function filtrarProductos() {
    let palabraClave = prompt("Ingresa el producto que buscas").trim().toUpperCase();
    let resultado = listaProductos.filter(x => x.nombre.toUpperCase().includes(palabraClave));

    if (resultado.length > 0) {
        console.table(resultado);
    } else {
        alert("No se encontraron coincidencias.");
    }
}

function agregarProducto() {
    let nombre = prompt("Ingresa el nombre del producto").trim();
    let precio = parseFloat(prompt("Ingresa el precio del producto"));
    let stock = parseInt(prompt("Ingresa el stock del producto"));

    if (isNaN(precio) || isNaN(stock) || nombre === "") {
        alert("Por favor ingresa datos válidos");
        return;
    }

    let producto = new Producto(nombre, precio, stock);
    listaProductos.push(producto);
    console.table(listaProductos);
}

// MENU DE LA TIENDA //

function menuTienda() {
    let opcion;
    do {
        opcion = prompt(
            "Elige una opción:\n" +
            "1. Buscar productos\n" +
            "2. Agregar producto\n" +
            "3. Salir"
        );

        switch (opcion) {
            case "1":
                filtrarProductos();
                break;
            case "2":
                agregarProducto();
                break;
            case "3":
                alert("Gracias por visitar nuestra tienda de maquillaje.");
                break;
            default:
                alert("Opción no válida, intenta de nuevo.");
        }
    } while (opcion !== "3");
}

iniciarPrograma();
