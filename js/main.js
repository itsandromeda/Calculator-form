/*jslint eqeq: true*/
/*global document*/
function operation() {
    "use strict";
    var number1 = document.getElementById("number1").value, number2 = document.getElementById("number2").value, ope = document.getElementById("operation").value;
    
    switch (ope) {
    case 1:
        if (ope == "sum") {
            return parseInt((number1), 10) + parseInt((number2), 10);
        }
        break;
    }
    
}