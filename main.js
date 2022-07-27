console.log('js logged');

import {Compra, Producto} from './classes'



function createNewClient() {
    var cardCheckbox = document.getElementById('card-checkbox').checked;
    var clientName = document.getElementById('client-name').value;
    var buy = new Compra(clientName, cardCheckbox);
}

function crearProducto() {
    nombreProducto = document.getElementById('nombre-producto').value;
    marcaProducto = document.getElementById('marca-producto').value;
    categoriaProducto = document.getElementById('categoria-producto').value;
    urlImageProducto = document.getElementById('url-image-producto').value;
    precioProducto = document.getElementById('precio-producto').value;
    stockProducto = document.getElementById('stock-producto').value;

    nuevoProducto = new Producto(nombreProducto, marcaProducto, categoriaProducto, urlImageProducto, precioProducto, stockProducto);

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
            <p id='product-stock'>Stock: ${nuevoProducto.stock}</p>
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
