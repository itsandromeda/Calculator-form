/*jslint eqeq: true*/
/*global window, document, alert, sum, sub, mult, div*/
var operation,
    result,
    si = document.getElementById("si"),
    no = document.getElementById("no"),
    nombre,
    num1,
    num2;

function oper() {
    "use strict";
    switch (operation) {
    case 1:
        var r = num1 + num2;
        result.innerHTML = "<span class='results'> Hola " + nombre + ",<br>La suma entre " + num1 + " y " + num2 + " es " + r + "<span>";
        break;

    case 2:
        r = num1 - num2;
        result.innerHTML = "<span class='results'>Hola " + nombre + ",<br>La resta entre " + num1 + " y " + num2 + " es " + r + "<span>";
        break;

    case 3:
        r = num1 * num2;
        result.innerHTML = "<span class='results'>Hola " + nombre + ",<br>La multiplicación entre " + num1 + " y " + num2 + " es " + r + "<span>";
        break;

    case 4:
        r = num1 / num2;
        result.innerHTML = "<span class='results'>Hola " + nombre + ",<br>La división entre " + num1 + " y " + num2 + " es " + r + "<span>";
        break;

    default:
        result.innerHTML = "Si no ingresas un número no se puede hacer una operación :o";
    }
}

no.addEventListener("click", function () {
    "use strict";
    nombre = document.getElementById("name").value;
    num1 = parseInt((document.getElementById("number1").value), 10);
    num2 = parseInt((document.getElementById("number2").value), 10);
    operation = parseFloat(document.getElementById("operation").value);
    result = document.getElementById("answer");
    oper();
});
/*
si.addEventListener("click", function () {
    "use strict";
});*/