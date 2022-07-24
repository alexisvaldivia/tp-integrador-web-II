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


function crearProducto() {
    var nombreProducto = document.getElementById(nombre-producto).value;
    var marcaProducto = document.getElementById(marca-producto).value;
    var categoriaProducto = document.getElementById(categoria-producto).value;
    var urlimageProducto = document.getElementById(urlimage-producto).value;
    var precioProducto = document.getElementById(precio-producto).value;
    var stockProducto = document.getElementById(stock-producto).value;

}

let producto1 = new Producto(nombreProducto, marcaProducto, categoriaProducto, urlimageProducto, precioProducto, stockProducto);

console.log(producto1);