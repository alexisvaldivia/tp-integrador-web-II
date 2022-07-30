console.log('js logged');

class Compra {
    constructor(cliente, tarjeta) {
        this.productos = []
        this.cliente = cliente
        this.tarjeta = tarjeta
    }

    agregarProducto(nuevoProducto) {
        this.productos.push(nuevoProducto);
    }
}

class Producto {
    constructor(nombre, marca, categoria, urlimage, precio, cantidad) {
        this.nombre = nombre
        this.marca = marca
        this.categoria = categoria
        this.urlimage = urlimage
        this.precio = precio
        this.cantidad = cantidad
    }

    nombreCompleto() {
        return `${this.nombre} ${this.marca}`;
    }
}

function createNewClient() {
    var clientName = document.getElementById('client-name').value;
    var cardCheckbox = document.getElementById('card-checkbox').checked;
    var buy = new Compra(clientName, cardCheckbox);
    console.log(buy)

    // delete button "Crear cliente"
    let clientForm = document.getElementById('client-form');
    let clientFormButton = document.getElementById('create-client-button');
    clientForm.removeChild(clientFormButton);
}

function crearProducto() {
    nombreProducto = document.getElementById('nombre-producto').value;
    marcaProducto = document.getElementById('marca-producto').value;
    categoriaProducto = document.getElementById('categoria-producto').value;
    urlImageProducto = document.getElementById('url-image-producto').value;
    precioProducto = document.getElementById('precio-producto').value;

    nuevoProducto = new Producto(nombreProducto, marcaProducto, categoriaProducto, urlImageProducto, precioProducto, cantidadProducto);

    compra.agregarProducto(nuevoProducto)

    addProductCard();
}

function addProductCard() {
    const productList = document.getElementById('product-list');
    const element = document.createElement('div');
    element.innerHTML =
    `<div class='card mb-5' style='width: 18rem; margin: auto;'>
        <img class='card-img-top' src='${nuevoProducto.urlimage}'>
        <div class='card-body'>
            <h5 class='card-title'>${nuevoProducto.nombreCompleto()}</h5>
            <p>Categoría: ${nuevoProducto.categoria}</p>
            <p>Precio: ${nuevoProducto.precio}</p>
            <p id='product-cantidad'>cantidad: ${nuevoProducto.cantidad}</p>
            <button type='button' class='btn btn-secondary' onclick='addToCart()'>Añadir</button>
        </div>
    </div>`

    productList.appendChild(element);
}

compra = new Compra()

let cuantityProducts = 0;

function addToCart() {
    cuantityProducts += 1;
    document.getElementById('quantity-products').innerHTML = cuantityProducts

    nuevoProducto.venta()
    compra.agregarProducto()
}