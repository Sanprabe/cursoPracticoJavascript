function pCuadrado(lado){
    return lado * 4;
}
function aCuadrado(lado){
    return lado**2;
}
function pTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}
function aTriangulo(base, altura){
    return (base*altura)/2;
}
function pCirculo(radius){
    return 2*(Math.PI)*(radius);
}
function aCirculo(radius){
    return (Math.PI)*(radius**2);
}

// ----- Funciones ejecutadas en el DOM ----- //

// Cuadrado
function calcularPerimetroCuadrado(){
    const inputLado = document.getElementById("inputCuadrado");
    const lado = parseFloat(inputLado.value);

    alert(pCuadrado(lado));
}

function calcularAreaCuadrado(){
    const inputLado = document.getElementById("inputCuadrado");
    const lado = inputLado.value;
    
    alert(aCuadrado(lado));
}

// Triangulo
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const lado1 = parseFloat(inputLado1.value);

    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const lado2 = parseFloat(inputLado2.value);

    const inputLado3 = document.getElementById("inputTrianguloLado3");
    const lado3 = parseFloat(inputLado3.value);

    alert(pTriangulo(lado1, lado2, lado3));
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTrianguloBase");
    const base = parseFloat(inputBase.value);

    const inputAltura = document.getElementById("inputTrianguloAltura");
    const altura = parseFloat(inputAltura.value);

    alert(aTriangulo(base, altura));
}

//Diametro

function calcularDiametroCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const radio = parseFloat(inputRadio.value);

    alert(pCirculo(radio));
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const radio = parseFloat(inputRadio.value);

    alert(aCirculo(radio));
}

// Triangulo Isoceles

function isocelesHeight(duplicatedSide, diffSide){
    return Math.sqrt((duplicatedSide**2) - ((diffSide**2)/4) )
}

function isIsoceles(lado1, lado2, lado3){

    inputLado1 = document.getElementById("inputTrianguloIsocelesLado1");
    inputLado2 = document.getElementById("inputTrianguloIsocelesLado2");
    inputLado3 = document.getElementById("inputTrianguloIsocelesLado3");

    lado1 = parseFloat(inputLado1.value);
    lado2 = parseFloat(inputLado2.value);
    lado3 = parseFloat(inputLado3.value);

    if((lado1 === lado2) && (lado1 != lado3) ){
        duplicatedSide = lado1;
        diffSide = lado3;
        if(duplicatedSide === 0 || diffSide === 0){
            alert("No es un triangulo si tiene un lado que mide 0");
            return;
        } else if(duplicatedSide*2 <= diffSide){
            alert("No es un triangulo que exista");
            return;
        }
    } else if ((lado1 === lado3) && (lado1 != lado2)){
        duplicatedSide = lado1;
        diffSide = lado2;
        if(duplicatedSide === 0 || diffSide === 0){
            alert("No es un triangulo si tiene un lado que mide 0");
            return;
        } else if(duplicatedSide*2 <= diffSide){
            alert("No es un triangulo que exista");
            return;
        }
    } else if((lado2 === lado3) && (lado2 != lado1)){
        duplicatedSide = lado2;
        diffSide = lado1;
        if(duplicatedSide === 0 || diffSide === 0){
            alert("No es un triangulo si tiene un lado que mide 0");
            return;
        } else if(duplicatedSide*2 <= diffSide){
            alert("No es un triangulo que exista");
            return;
        }
    } else{
        alert("Este no es un triangulo isoceles");
        return;
    }

    alert(isocelesHeight(duplicatedSide, diffSide));
}