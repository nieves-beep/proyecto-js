document.addEventListener("DOMContentLoaded", function () {
    // alerta de bienvenida
    Swal.fire({
        title: "¡Bienvenido a Doll Makeup Store! ❤️",
        text: "Descubrí los mejores productos de maquillaje",
        confirmButtonText: "¡Vamos!"
    });

    // eventos de botones
    document.getElementById("btnIniciarSesion").addEventListener("click", iniciarSesion);
    document.getElementById("btnMostrarProductos").addEventListener("click", mostrarProductos);
    document.getElementById("btnAgregarProducto").addEventListener("click", agregarProducto);
});

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

// carga de prod localstorage
let listaProductos = JSON.parse(localStorage.getItem("productos")) || [
    new Producto("Labial", 10500, 20),
    new Producto("Base Líquida", 11000, 15),
    new Producto("Rímel Waterproof", 9500, 10),
    new Producto("Paleta de Sombras", 8000, 8)
];

// iniciar sesion
function iniciarSesion() {
    Swal.fire({
        title: "Iniciar Sesión",
        html:
            '<input id="swal-input-usuario" class="swal2-input" placeholder="Usuario">' +
            '<input id="swal-input-password" type="password" class="swal2-input" placeholder="Contraseña">',
        confirmButtonText: "Ingresar",
        showCancelButton: true,
        preConfirm: () => {
            const usuario = document.getElementById("swal-input-usuario").value;
            const contraseña = document.getElementById("swal-input-password").value;

            if (usuarios.some(u => u.usuario === usuario && u.contraseña === contraseña)) {
                Swal.fire("¡Bien!", "Inicio de sesión correcto", "success");
            } else {
                Swal.fire("Error", "Usuario o contraseña incorrectos", "error");
            }
        }
    });
}

// DOM
function mostrarProductos() {
    let container = document.getElementById("productosContainer");
    container.innerHTML = "";

    listaProductos.forEach(producto => {
        let div = document.createElement("div");
        div.innerHTML = `<p><strong>${producto.nombre}</strong> - $${producto.precio} - Stock: ${producto.stock}</p>`;
        container.appendChild(div);
    });
}

// agregar un productop
function agregarProducto() {
    Swal.fire({
        title: "Agregar Producto",
        html:
            '<input id="swal-input-nombre" class="swal2-input" placeholder="Nombre del producto">' +
            '<input id="swal-input-precio" type="number" class="swal2-input" placeholder="Precio">' +
            '<input id="swal-input-stock" type="number" class="swal2-input" placeholder="Stock">',
        confirmButtonText: "Agregar",
        showCancelButton: true,
        preConfirm: () => {
            const nombre = document.getElementById("swal-input-nombre").value.trim();
            const precio = parseFloat(document.getElementById("swal-input-precio").value);
            const stock = parseInt(document.getElementById("swal-input-stock").value);

            if (!nombre || isNaN(precio) || isNaN(stock)) {
                Swal.fire("Error", "Por favor, ingresa valores válidos", "error");
                return;
            }

            let nuevoProducto = new Producto(nombre, precio, stock);
            listaProductos.push(nuevoProducto);
            localStorage.setItem("productos", JSON.stringify(listaProductos));

            Swal.fire("¡Éxito!", "Producto agregado correctamente", "success");
            mostrarProductos(); // actualiza la lista de productos en el DOM
        }
    });
}


