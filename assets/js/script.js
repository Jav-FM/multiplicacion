
const boton = document.getElementById("boton");

boton.addEventListener("click", (e) => {
    const numero = document.getElementById("numero").value;
    const resultado = document.querySelector("p");

    if (numero < 1 || numero > 20) {
        alert("Numero fuera de rango, debes ingresar un número entre 1 y 20");
    } else {
        e.preventDefault();

        resultado.innerHTML = "Tabla de multiplicar:<br>"
        for (let i = 1; i<=numero; i++){
            console.log(i+" x " + numero + " = " + i*numero);
            resultado.innerHTML = resultado.innerHTML + i + " x " + numero + " = " + i*numero + "<br>";
        }

        resultado.innerHTML = resultado.innerHTML + "<br>Factoriales:<br>"
        for (let i = 1; i<=numero; i++){

            let factorial = 1;
            for (let j = 1; j<=i; j++){
            factorial = factorial*j;
            }
            console.log("Factorial de "+ i +" es: "+factorial);
            resultado.innerHTML = resultado.innerHTML + "Factorial de "+ i +" es: "+factorial+"<br>";
        }   
    }

});

