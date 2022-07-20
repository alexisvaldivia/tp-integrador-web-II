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
  let nombreProducto = document.getElementById(nombre);
  let marcaProducto = document.getElementById(marca);
  let categoriaProducto = document.getElementById(categoria);
  let urlimageProducto = document.getElementById(urlimage);
  let precioProducto = document.getElementById(precio);
  let stockProducto = document.getElementById(stock);

  console.log(producto1);
}

let producto1 = new Producto(nombreProducto, marcaProducto, categoriaProducto, urlimageProducto, precioProducto, stockProducto);
