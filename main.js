// quito la recarga de la página al envíar el formulario
document.getElementById('login-container').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('content').classList.remove('hide');
    document.getElementById('login-container').classList.add('hide');
})

function percentageCalculator(number, percentage) {
    return (number / 100) * percentage;
}

class Compra {
    constructor(cliente, tarjeta) {
        this.productos = []
        this.cliente = cliente
        this.tarjeta = tarjeta
    }

    agregarProducto(nuevoProducto) {
        this.productos.push(nuevoProducto);
    }

    subtotal() {
        let subtotal = 0;
        for (let producto of this.productos) {
            subtotal += producto.precio * producto.cantidad;
        }
        return parseInt(subtotal).toFixed(2);
    }

    total() {
        let total = parseFloat(this.subtotal())
        total += percentageCalculator(total, 21);

        if (this.tarjeta) {
            total += percentageCalculator(total, 15);
        }

        return total.toFixed(2);
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
    let clientName = document.getElementById('client-name').value;
    let cardCheckbox = document.getElementById('card-checkbox').checked;
    buy = new Compra(clientName, cardCheckbox);

    // delete button 'Crear cliente'
    let clientForm = document.getElementById('client-form');
    let clientFormButton = document.getElementById('create-client-button');
    clientForm.removeChild(clientFormButton);
}

function createProduct() {
    nombreProducto = document.getElementById('nombre-producto').value;
    marcaProducto = document.getElementById('marca-producto').value;
    categoriaProducto = document.getElementById('categoria-producto').value;
    urlImageProducto = document.getElementById('url-image-producto').value;
    precioProducto = document.getElementById('precio-producto').value;
    cantidadProducto = parseInt(document.getElementById('cantidad-producto').value);

    nuevoProducto = new Producto(nombreProducto, marcaProducto, categoriaProducto, urlImageProducto, precioProducto, cantidadProducto);

    buy.agregarProducto(nuevoProducto);

    let subtotal = document.getElementById('subtotal');
    subtotal.innerHTML = buy.subtotal();

    typeof (subtotal)

    let total = document.getElementById('total');
    total.innerHTML = buy.total();

    addProductCard();
}

function addProductCard() {
    const productList = document.getElementById('product-list');
    const element = document.createElement('div');
    element.innerHTML =
        `<div class='card text-left mb-2 w-75 mx-auto'>
        <div class='card-body'>
            <h3>${nuevoProducto.nombreCompleto()}</h3>
            <img src='${nuevoProducto.urlimage}'">
            <strong>Categoría</strong>: ${nuevoProducto.categoria}
            <strong>Precio</strong>: $${nuevoProducto.precio}
            <strong id='product-cantidad'>Cantidad</strong>: ${nuevoProducto.cantidad}
        </div>
    </div>`

    productList.appendChild(element);
}