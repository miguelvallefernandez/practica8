var segundos=0;
var minutos = 0;
//var horas = 0;

var myVar;

window.onload=function()
{

    if(localStorage.getItem("segundos")!=0){
         segundos=localStorage.getItem("segundos");
    }
    else {
        segundos = 0;
    }

    if(localStorage.getItem("minutos")!=0){
        minutos=localStorage.getItem("minutos");
    }
    else {
        minutos = 0;
    }

    if (minutos < 10) {
        document.getElementById("minutos").innerHTML = "0" + localStorage.getItem("minutos");

    }
    else {
        document.getElementById("minutos").innerHTML = localStorage.getItem("minutos");

    }
    if (segundos < 10) {
        document.getElementById("segundos").innerHTML = "0" + localStorage.getItem("segundos");
    }
    else {
        document.getElementById("segundos").innerHTML = localStorage.getItem("segundos");
    }


}




function empezar() {


    myVar = setInterval(function () {
        myTimer()
    }, 1000);


}


function myTimer() {
    if (minutos < 10) {
        document.getElementById("minutos").innerHTML = "0" + localStorage.getItem("minutos");

    }
    else {
        document.getElementById("minutos").innerHTML = localStorage.getItem("minutos");

    }
    segundos++;
    localStorage.setItem("segundos", segundos);
    if (segundos < 10) {
        document.getElementById("segundos").innerHTML = "0" + localStorage.getItem("segundos");
    }
    else {
        document.getElementById("segundos").innerHTML = localStorage.getItem("segundos");
    }

    if (segundos >= 59) {
        segundos = 0;
        minutos++;
        localStorage.setItem("minutos", minutos);
        if (minutos < 10) {
            document.getElementById("minutos").innerHTML = "0" + localStorage.getItem("minutos");

        }
        else {
            document.getElementById("minutos").innerHTML = localStorage.getItem("minutos");

        }

    }


}


function reiniciar() {

    segundos = 0;
    minutos = 0;

    localStorage.setItem("minutos",minutos);
    localStorage.setItem("segundos",segundos);

    document.getElementById("minutos").innerHTML = "0" + minutos;
    document.getElementById("segundos").innerHTML = "0" + segundos;

}


function parar() {
    clearInterval(myVar);
}