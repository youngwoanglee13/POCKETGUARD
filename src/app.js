
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
    montoi=Number.parseInt(cantidadIngreso.value);
    if(montoi>0 && descripcionIngreso.value.length>0){
        var nuevatransaccion = new Object();
        nuevatransaccion.monto=montoi;
        nuevatransaccion.tipo='Ingreso';
        nuevatransaccion.descripcion=descripcionIngreso.value;
        registros.push(nuevatransaccion);

        totalIngreso=totalIngreso+nuevatransaccion.monto;
        total=totalIngreso-totalGasto;

        document.getElementById("ttotal").innerHTML = "TOTAL: " + total;
        document.getElementById("tingresos").innerHTML = "TOTAL INGRESOS: " + totalIngreso;
        actualizarTablaTransaccion();
    }else{
        alert("Llene los campos monto y descripcion!!!");
    }
    
}
function gasto() {
    montog=Number.parseInt(cantidadGasto.value);
    if(montog>0 && descripcionGasto.value.length>0){
        var nuevatransaccion = new Object();
        nuevatransaccion.monto=montog;
        nuevatransaccion.tipo='Gasto';
        nuevatransaccion.descripcion=descripcionGasto.value;
        registros.push(nuevatransaccion);
    
        totalGasto=totalGasto+nuevatransaccion.monto;
        total=totalIngreso-totalGasto;
    
        document.getElementById("ttotal").innerHTML = "TOTAL: " + total;
        document.getElementById("tgastos").innerHTML = "TOTAL INGRESOS: " + totalGasto;
        actualizarTablaTransaccion();
    }else{alert("Llene los campos monto y descripcion!!!")}
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
