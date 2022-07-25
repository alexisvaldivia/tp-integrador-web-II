console.log("js logged");

class Compra {
    constructor(productos = [], cliente, cantidad, tarjeta) {
        this.productos = productos
        this.cliente = cliente
        this.cantidad = cantidad
        this.tarjeta = tarjeta
    }

    agregarProducto() {
    }
}

class Producto {
    constructor(nombre, marca, categoria, urlimage, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.categoria = categoria
        this.urlimage = urlimage
        this.precio = precio
        this.stock = stock
    }

    venta(asd) {
        this.stock -= asd;
    }

    nombreCompleto() {
        return `${this.nombre} ${this.marca}`;
    }
}

let products = []

function crearProducto() {
    let nombreProducto = document.getElementById("nombre-producto").value;
    let marcaProducto = document.getElementById("marca-producto").value;
    let categoriaProducto = document.getElementById("categoria-producto").value;
    let urlImageProducto = document.getElementById("url-image-producto").value;
    let precioProducto = document.getElementById("precio-producto").value;
    let stockProducto = document.getElementById("stock-producto").value;

    let nuevoProducto = new Producto(nombreProducto, marcaProducto, categoriaProducto, urlImageProducto, precioProducto, stockProducto);

    products.push(nuevoProducto);

    // addProductCard();

    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="card mb-5" style="width: 18rem;">
    <img class="card-img-top" src="${nuevoProducto.urlimage}">
    <div class="card-body">
        <h5 class="card-title">${nuevoProducto.nombreCompleto()}</h5>
        <p>Categoría: ${nuevoProducto.categoria}</p>
        <p>Precio: ${nuevoProducto.precio}</p>
        <p>Stock: ${nuevoProducto.stock}</p>
    </div>
</div>
    `

    productList.appendChild(element);
}

function addProductCard() {

}
