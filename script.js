let numero = Number(prompt("Ingrese un numero: "));
const resultado = document.getElementById("resultado");


if(isNaN(numero)){
    
    resultado.textContent = "Debe ingresar un numero valido";
    
} else if(numero < 0){
    resultado.textContent = "El factorial no existepara numero negativos";
    
    
} else {
    let factorial = 1;
    for (let i=1; i <= numero; i++){
        factorial *= i;
    }
    resultado.textContent = `El factorial de ${numero} es ${factorial}`;
    
}