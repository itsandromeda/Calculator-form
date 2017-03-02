/*jslint eqeq: true*/
/*global window, document, alert*/
var nombre = document.getElementById("name").value,
    number1 = document.getElementById("number1").value,
    number2 = document.getElementById("number2").value,
    operation = document.getElementById("operation").value,
    result = document.getElementById("answer"),
    si = document.getElementById("si"),
    no = document.getElementById("no");

function oper(operation) {
    "use strict";
    function sum(number1, number2) {
        result = parseInt((number1), 10) + parseInt((number2), 10);
        return result;
    }

    function sub(number1, number2) {
        
        result = parseInt((number1), 10) - parseInt((number2), 10);
        return result;
    }

    function mult(number1, number2) {
        result = parseInt((number1), 10) * parseInt((number2), 10);
        return result;
    }

    function div(number1, number2) {
        result = parseInt((number1), 10) / parseInt((number2), 10);
        return result;
    }
    
    switch (operation) {
    case ("1"):
        alert("suma");
        /*sum();
        result.innerHTML = name + "!<br>La suma de " + number1 + " y " + number2 + " es = " + suma;*/
        break;
    
    case ("2"):
        alert("resta");
        /*sub();
        result.innerHTML = name + "!<br>La resta de " + number1 + " y " + number2 + " es = " + resta;*/
        break;
            
    case ("3"):
        alert("mult");
        /*mult();
        result.innerHTML = name + "!<br>La multiplicación de " + number1 + " y " + number2 + " es = " + multiplicacion;*/
        break;
    
    case ("4"):
        alert("division");
        /*
        div();
        result.innerHTML = name + "!<br>La división de " + number1 + " y " + number2 + " es = " + division;*/
        break;
            
    default:
        alert(nombre);
    }
}

no.addEventListener("click", function () {
    "use strict";
    oper();
});

si.addEventListener("click", function () {
    "use strict";
});