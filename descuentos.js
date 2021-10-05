//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioDescuento(precio,descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioDescuento)/100;

    return precioConDescuento
}


function onClickButtonDiscount(){
    const inputprice = document.getElementById("input-price");
    const priceValue = inputprice.value;

    const inputdiscount = document.getElementById("input-discount");
    const discountValue = inputdiscount.value;

    const precioConDescuento = calcularPrecioDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $"+precioConDescuento
}

