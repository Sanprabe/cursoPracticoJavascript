// HELPERS
function calcularPromedio(arr){
    let sumArr = 0;
    let sizeArr = arr.length;
    for (let i = 0; i < sizeArr; i++){
        sumArr = sumArr + arr[i];
    }
    return sumArr / sizeArr;
}

function calcularMediana(arr){
    let medio = arr.length;

    if (medio % 2 == 0){
        let arrMediana = [arr[(medio/2)-1], arr[medio/2]];
        return calcularPromedio(arrMediana);
    }else{
        return arr[parseInt(medio/2)];
    }
}



const salariosCol = colombia.map( (persona) => {return persona.salary;}).sort(function(salaryA, salaryB){
    return salaryA - salaryB;
}) // Se hace una lista con los atributos salary de el objeto "personas" y luego se ordenan de mayor a menor


console.log(`La mediana de los salarios en Colombia es ${calcularMediana(salariosCol)}`);

