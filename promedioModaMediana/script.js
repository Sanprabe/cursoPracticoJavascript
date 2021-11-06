
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

// let arrEx = [100, 340, 230, 580, 32, 12, 13]; // Definir valores
let arrEx = [0, 1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 4, 5, 6, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9];
arrEx = arrEx.sort((a,b) => {return a-b}); // Organizar valores

console.log(`El promedio de aray ejemplo es ${calcularPromedio(arrEx)}`);
console.log(`La moda de aray ejemplo es ${calcularModa(arrEx)}`);
console.log(`La mediana de aray ejemplo es ${calcularMediana(arrEx)}`);