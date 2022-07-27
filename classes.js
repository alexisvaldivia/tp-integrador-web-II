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
    constructor(nombre, marca, categoria, urlimage, precio) {
        this.nombre = nombre
        this.marca = marca
        this.categoria = categoria
        this.urlimage = urlimage
        this.precio = precio
    }

    nombreCompleto() {
        return `${this.nombre} ${this.marca}`;
    }
}

export {Compra, Producto};