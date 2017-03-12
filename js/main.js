/*jslint eqeq: true*/
/*global window, document, alert, prompt, confirm, number1, number2, name*/
document.getElementById('buttons').addEventListener('click', function (e) {
    "use strict";
    var target = e.target,
        nombre = document.getElementById("name").value,
        num1 = parseInt((document.getElementById("number1").value), 10),
        num2 = parseInt((document.getElementById("number2").value), 10),
        operation = parseFloat(document.getElementById("operation").value),
        result = document.getElementById("answer"),
        r,
        newNumber,
        op1,
        newNum1;

    function oper() {
        switch (operation) {
        case 1:
            r = num1 + num2;
            break;

        case 2:
            r = num1 - num2;
            break;

        case 3:
            r = num1 * num2;
            break;

        case 4:
            r = num1 / num2;
            break;

        default:
            result.innerHTML = "Si no ingresas un número no se puede hacer una operación :o";
        }
    }

    if (target.id === 'si') {
        if (confirm("Por favor ingresa una nueva operación y un nuevo número.") === true) {
            document.getElementById('number1').disabled = true;
            document.getElementById("operation").selectedIndex = 0;
            oper();
            number1.value = r;
            oper();
        } else {
            number1.value = "";
            number2.value = "";
            document.getElementById("operation").selectedIndex = 0;
            oper();
            result.innerHTML = "<span class='results'>" +
                                    "Hola <strong>" + nombre + "</strong>,<br>" +
                                    "El resultado de tu operación es " + r +
                                "<span>";

        }
    } else if (target.id === 'no') {
        oper();
        result.innerHTML = "<span class='results'>" +
                                "Hola <strong>" + nombre + "</strong>,<br>" +
                                "El resultado de tu operación es " + r +
                            "<span>";
    }
});