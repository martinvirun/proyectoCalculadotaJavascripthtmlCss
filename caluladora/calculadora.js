function init(){
    let resultado = document.getElementById("resultado");
    let suma = document.getElementById("sumar");
    let resta = document.getElementById("restar");
    let multiplica = document.getElementById("multiplicar");
    let division = document.getElementById("dividir");
    let factorial = document.getElementById("factorial");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");
    let punto = document.getElementById("punto");
    let borrarDigito = document.getElementById("borrarDigito");
    let borrarTodo = document.getElementById("borrarTodo");
    let operadorUno;
    let cuenta;
    let operadorDos

    function sumar(a,b){

        resultado = parseInt(a)+iparseInt(b)
        return resultado

    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1"
        operadorUno = operadorUno +"1"
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9"
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0"
    }
    punto.onclick = function(e){
        resultado.textContent = resultado.textContent + ","
    }
    borrarTodo.onclick = function(e){
       resultado.textContent  = ""
    }
    borrarDigito.onclick = function(e){
        borrarDigitos();
    }
    suma.onclick = function(e){
    
        resultado.textContent = sumar(operadorUno,operadorUno);
    }
    resta.onclick = function(e){
        restar();
    }
    multiplica.onclick = function(e){
        multiplicar();
    }
    division.onclick = function(e){
        dividir();
    }
    factorial.onclick = function(e){
        factorializar();
    }
    
    alert(resultado);
}
     