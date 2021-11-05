function precioFinal(precioInicial, descuento){
    return (( (100 - descuento) * precioInicial ) / 100);
}

function onclickPrecioFinal(){
    const inputPrecioInicial = document.getElementById("inputPrecioIncial");
    const inputDescuento = document.getElementById("inputDescuento");

    const precioInicial = inputPrecioInicial.value;
    const descuento = inputDescuento.value;

    const outputPrecioFinal = precioFinal(precioInicial, descuento);

    console.log(outputPrecioFinal);
}