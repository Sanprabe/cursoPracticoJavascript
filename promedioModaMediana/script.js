
function calcularPromedio(arr){
    let sumArr = 0;
    let sizeArr = arr.length;
    for (let i = 0; i < sizeArr; i++){
        sumArr = sumArr + arr[i];
    }
    return sumArr / sizeArr;
}

function calcularModa(arr){
    let nums = [];
    let counts = [];
    let currNum = arr[0];
    let currCount = 0;
    
    for(let i = 0; i < arr.length; i++){
        currCount++
        if(currNum != arr[i+1]){
            nums.push(currNum);
            counts.push(currCount);
            currNum = arr[i+1];
            currCount = 0;
        }
    }

    let maxCounts = Math.max(...counts);
    
    for(let j = 0; j < nums.length; j++){
        
        if(counts[j] != maxCounts){
            counts.splice(j, 1);
            nums.splice(j, 1);
            j--
        }
    }
    
    if(nums.length != 1){
        return "La moda no existe en este array";
    }else{
        return nums[0];
    }

}

function calcularMediana(arr){
    let medio = arr.length;
    
    if (medio % 2 == 0){
        let arrMediana = [arr[(medio/2)-1], arr[medio/2]];
        return calcularPromedio(arrMediana);
    }else{
        return arr[(medio/2)-0.5];
    }
}

function mediaAritmeticaPonderada(arrW, arrX){

    function add(count, x){ // Para sumar con reduce
        return count + x
    }

    if (arrW.length != arrX.length){
        console.log("No es posible calcular");
    }

    let sumWbyX = 0;

    for(let i = 0; i < arrW.length; i++){
        let temp = arrW[i]*arrX[i];
        sumWbyX = sumWbyX + temp;
    }

    let sumW = arrX.reduce(add, 0);

    return sumWbyX / sumW

}


// --- CORRER MEDIA ARITMETICA PONDERADA ---
// let w = [85, 70, 90];
// let x = [3, 1, 1];

// console.log(`La media aritmetica ponderada de los arays de ejemplo es ${mediaAritmeticaPonderada(w,x)}`);

// --- CORRER PROMEDIO, MODA, MEDIANA ---
// let arrEx = [100, 340, 230, 580, 32, 12, 13]; // Valores para promedio y mediana
// let arrEx = [0, 1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9]; // Valores para moda
// arrEx = arrEx.sort((a,b) => {return a-b}); // Organizar de menor a mayor

// console.log(`El promedio de aray ejemplo es ${calcularPromedio(arrEx)}`);
// console.log(`La moda de aray ejemplo es ${calcularModa(arrEx)}`);
// console.log(`La mediana de aray ejemplo es ${calcularMediana(arrEx)}`);