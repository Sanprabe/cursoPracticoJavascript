// Helpers
function calcularPromedio(arr){
    let sumArr = 0;
    let sizeArr = arr.length;
    for (let i = 0; i < sizeArr; i++){
        sumArr = sumArr + arr[i];
    }
    return sumArr / sizeArr;
}

// Calculadora mediana de los salarios

function calcularMedianaSalario(arr){
    let medio = arr.length;

    if (medio % 2 == 0){
        let arrMediana = [arr[(medio/2)-1], arr[medio/2]];
        return calcularPromedio(arrMediana);
    }else{
        return arr[parseInt(medio/2)];
    }
}

// Analisis

let salariosCol = colombia.map((persona) => {return persona.salary;});

salariosCol = salariosCol.sort(function(salaryA, salaryB){
    return salaryA - salaryB;
}) 

medianaGeneralCol = calcularMedianaSalario(salariosCol);

// Calcular top 10%

const a = salariosCol.length - parseInt((salariosCol.length)/10);
const colombiaTop10 = salariosCol.splice(a);
console.log(colombiaTop10);




