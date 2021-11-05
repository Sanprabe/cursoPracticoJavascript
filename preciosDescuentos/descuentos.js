function calcularPrecioFinal(precioInicial, descuentoIncial, cuponCliente){
    
    let descuentoCupon = 0;

    if(!(precioInicial > 0 && descuentoIncial >= 0)){
        alert("No se puede calcular con estos valores");
        return;
    }

    if (cuponCliente != ""){
        const cupon = coupones.find((cuponGeneral) => {return cuponGeneral.name === cuponCliente});
        if (typeof(cupon) === undefined){
            alert("Cupon no valido");
        } else{
            descuentoCupon = cupon.discount;
        }
    }

    

    const precioConDescuentoInicial = (( (100 - descuentoIncial) * precioInicial ) / 100);

    const precioFinalConAmbosDescuentos = (( (100 - descuentoCupon) * precioConDescuentoInicial ) / 100);

    return precioFinalConAmbosDescuentos;
}

function onclickPrecioFinal(){
    const inputPrecioInicial = document.getElementById("inputPrecioIncial");
    const inputDescuento = document.getElementById("inputDescuento");
    const inputCupon = document.getElementById("inputCupon");

    const precioInicial = parseInt(inputPrecioInicial.value);
    const descuento = parseInt(inputDescuento.value);
    const cupon = inputCupon.value.toUpperCase();


    const precioFinal = calcularPrecioFinal(precioInicial, descuento, cupon);

    const elementOutputPrecioFinal = document.getElementById("outputResult");

    elementOutputPrecioFinal.innerText = `El precio final con descuento es de $${precioFinal}`
}


coupones = [{name:"HI", discount: 25}, {name:"BYE", discount: 25}, {name:"LOL", discount: 25}]