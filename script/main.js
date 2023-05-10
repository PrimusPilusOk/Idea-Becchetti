console.log("Hola! Bienvenid@ a PetCare!");

const form_turnos = document.getElementById("form_turnos");
form_turnos.addEventListener("submit", function(event) {
event.preventDefault(); 
let turnosElegidos = parseInt(document.getElementById("cantidad_turnos").value);
let descuento = false;
let porcentajeDescuento = 0;
if (document.getElementById("jubilado").checked) {
    descuento = true;
    porcentajeDescuento = 30;
}
const resultado = document.getElementById("resultado");
resultado.innerHTML = `Turnos elegidos: ${turnosElegidos}<br><br>Porcentaje de descuento: ${porcentajeDescuento}%`;
});

const form_guardia = document.getElementById("form_guardia");
form_guardia.addEventListener("submit", function(event) {
event.preventDefault();
let nombrePaciente = document.getElementById("nombre_paciente").value;
let nombreMascota = document.getElementById("nombre_mascota").value;
let pacientes = parseInt(document.getElementById("cantidad_pacientes").value);
let resultados = document.getElementById("resultados");
resultados.innerHTML = "";
for (let turno = 1; turno <= pacientes; turno++) {
let mensaje = "El paciente " + nombrePaciente + " con su mascota " + nombreMascota + " tiene asignado el turno número " + turno + "<br>";
resultados.innerHTML += mensaje;
}
});

class Producto {
constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
}};

const formulario_producto = document.getElementById("formulario_producto");
formulario_producto.addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const producto = new Producto(nombre, precio, cantidad);
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
    document.getElementById("mensaje").textContent = "Producto agregado";
    mostrarProductos();
    formulario_producto.reset();
});

function mostrarProductos() {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    const productosContainer = document.getElementById("productos");
    productosContainer.innerHTML = "";
    productos.forEach((producto, index) => {
      const productoHTML = `
        <div>
          <h3>Producto ${index+1}</h3>
          <p><strong>Nombre:</strong> ${producto.nombre}</p>
          <p><strong>Precio:</strong> $${producto.precio}</p>
          <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
        </div>
      `;
productosContainer.innerHTML += productoHTML;
});}

mostrarProductos();