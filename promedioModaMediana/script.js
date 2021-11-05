const arrEx = [100, 340, 230, 580, 32, 12]; // Definir valores
arrEx = arrEx.sort((a,b) => {return a-b}); // Organizar valores

function calcularPromedio(arr){
    let sumArr = 0;
    for (let num in arr){
        sumArr = sumArr + num
    }

    return sumArr / arr.lenght
}

function calcularModa(arr){

}

function calcularMediana(arr){
    let medianaIndex = arr.lenght;

    if (medianaIndex != Math.floor(medianaIndex)){
        arrayMediana = [Math.floor(medianaIndex), Math.ceil(medianaIndex)];
        return calcularPromedio(arrayMediana);
    }else{
        return medianaIndex;
    }
}
    