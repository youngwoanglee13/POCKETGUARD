
palabrasDelUsuario = document.querySelector("#btcantidad");

document.getElementById("btningreso").addEventListener("click", ingreso);
document.getElementById("btngasto").addEventListener("click", gasto);

const cantidadIngreso = document.querySelector("#inpcantidadi");
const descripcionIngreso = document.querySelector("#inpdescripcioni");
const cantidadGasto = document.querySelector("#inpcantidadg");
const descripcionGasto = document.querySelector("#inpdescripciong");

var registros=new Array();
var total=0;
var totalIngreso=0;
var totalGasto=0;
function ingreso() { 
    var nuevatransaccion = new Object();
    nuevatransaccion.monto=Number.parseInt(cantidadIngreso.value);
    nuevatransaccion.tipo='I';
    nuevatransaccion.descripcion=descripcionGasto;
    registros.push(nuevatransaccion);

    totalIngreso=totalIngreso+nuevatransaccion.monto;
    total=totalIngreso-totalGasto;

    document.getElementById("ttotal").innerHTML = "TOTAL: " + total;
    document.getElementById("tingresos").innerHTML = "TOTAL INGRESOS: " + totalIngreso;
    //alert(nuevatransaccion.descripcion=descripcionIngreso.value);
    //registros.length
}
function gasto() {
   
    var nuevatransaccion = new Object();
    nuevatransaccion.monto=Number.parseInt(cantidadGasto.value);
    nuevatransaccion.tipo='G';
    nuevatransaccion.descripcion=descripcionGasto.value;
    registros.push(nuevatransaccion);

    totalGasto=totalGasto+nuevatransaccion.monto;
    total=totalIngreso-totalGasto;

    document.getElementById("ttotal").innerHTML = "TOTAL: " + total;
    document.getElementById("tgastos").innerHTML = "TOTAL INGRESOS: " + totalGasto;
    
}
