console.log("js logged");

class Producto {
    constructor(nombre, marca, categoria, urlimage, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.categoria = categoria
        this.urlimage = urlimage
        this.precio = precio
        this.stock = stock
    }

    venta(x) {
        this.stock -= x;
    }

    nombreCompleto() {
        return `${this.nombre} ${this.marca}`;
    }
}

class Compra {
    constructor(productos = [], cliente, cantidad, tarjeta) {
        productos
    }

    cliente = this.cliente
    cantidad = this.cantidad

}