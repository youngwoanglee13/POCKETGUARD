
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
    nuevatransaccion.tipo='Ingreso';
    nuevatransaccion.descripcion=descripcionIngreso.value;
    registros.push(nuevatransaccion);

    totalIngreso=totalIngreso+nuevatransaccion.monto;
    total=totalIngreso-totalGasto;

    document.getElementById("ttotal").innerHTML = "TOTAL: " + total;
    document.getElementById("tingresos").innerHTML = "TOTAL INGRESOS: " + totalIngreso;
    actualizarTablaTransaccion();
    //alert(nuevatransaccion.descripcion=descripcionIngreso.value);
    //registros.length
}
function gasto() {
    var nuevatransaccion = new Object();
    nuevatransaccion.monto=Number.parseInt(cantidadGasto.value);
    nuevatransaccion.tipo='Gasto';
    nuevatransaccion.descripcion=descripcionGasto.value;
    registros.push(nuevatransaccion);

    totalGasto=totalGasto+nuevatransaccion.monto;
    total=totalIngreso-totalGasto;

    document.getElementById("ttotal").innerHTML = "TOTAL: " + total;
    document.getElementById("tgastos").innerHTML = "TOTAL INGRESOS: " + totalGasto;
    actualizarTablaTransaccion();
    
}
function actualizarTablaTransaccion(){
    var textTransacciones="";
    for (var i = 0; i < registros.length; i++) {
        var textorow="<tr>";
        textorow=textorow+"<td>"+registros[i].tipo+"</td><td>"+registros[i].descripcion+"</td><td>"+registros[i].monto+"</td>";     
        var textorow=textorow+"</tr>";
        textTransacciones=textTransacciones+textorow;
    }

    document.getElementById("transacciones").innerHTML = textTransacciones;
}
