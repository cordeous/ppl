// JavaScript Program 1 - Verificación de número par o impar
function verificarNumero() {
    var number = document.getElementById("number").value;
    var resultLabel = document.getElementById("result1");
    if (number % 2 === 0) {
        resultLabel.textContent = number + " es un número par.";
    } else {
        resultLabel.textContent = number + " es un número impar.";
    }
}

// JavaScript Program 2 - Suma de dos números
function sumarNumeros() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var suma = num1 + num2;
    var resultLabel = document.getElementById("result2");
    resultLabel.textContent = "La suma de " + num1 + " y " + num2 + " es: " + suma;
    resultLabel.style.display = "block";
}

// JavaScript Program 3 - Conversión de Celsius a Fahrenheit
function convertirCF() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
}
