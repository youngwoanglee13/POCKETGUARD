
palabrasDelUsuario = document.querySelector("#btcantidad");

document.getElementById("btningreso").addEventListener("click", ingreso);
document.getElementById("btngasto").addEventListener("click", gasto);

const cantidadIngreso = document.querySelector("#inpcantidadi");
const cantidadGasto = document.querySelector("#inpcantidadg");

var registros=new Array();
var total=0;
var totalIngreso=0;
var totalGasto=0;
function ingreso() { 
    var nuevatransaccion = new Object();
    nuevatransaccion.monto=Number.parseInt(cantidadIngreso.value);
    nuevatransaccion.tipo='I';
    registros.push(nuevatransaccion);

    totalIngreso=totalIngreso+nuevatransaccion.monto;
    total=totalIngreso-totalGasto;

    document.getElementById("ttotal").innerHTML = "TOTAL: " + total;
    document.getElementById("tingresos").innerHTML = "TOTAL INGRESOS: " + totalIngreso;
    //alert("Se registro un ingreso con valor de: " + nuevatransaccion.monto );
    //registros.length
}
function gasto() {
   
    var nuevatransaccion = new Object();
    nuevatransaccion.monto=Number.parseInt(cantidadGasto.value);
    nuevatransaccion.tipo='G';
    registros.push(nuevatransaccion);

    totalGasto=totalGasto+nuevatransaccion.monto;
    total=totalIngreso-totalGasto;

    document.getElementById("ttotal").innerHTML = "TOTAL: " + total;
    document.getElementById("tgastos").innerHTML = "TOTAL INGRESOS: " + totalGasto;
    
}
