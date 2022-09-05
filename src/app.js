
palabrasDelUsuario = document.querySelector("#btcantidad");

document.getElementById("btningreso").addEventListener("click", ingreso);
document.getElementById("btngasto").addEventListener("click", gasto);


const cantidadIngreso = document.querySelector("#inpcantidadi");
const cantidadGasto = document.querySelector("#inpcantidadg");

function ingreso() {
    const valorCantidadIngreso = Number.parseInt(cantidadIngreso.value);
    alert(valorCantidadIngreso);
}
function gasto() {
    const valorcantidadGasto = Number.parseInt(cantidadGasto.value);
    alert(valorcantidadGasto);
}