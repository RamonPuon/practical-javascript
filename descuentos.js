//const precioOriginal = 120;
//const descuento = 18;

const coupons = [
    {
        name: "Platzi 1",
        discount: 15,
    },
    {
        name: "Platzi 2",
        discount: 30,
    },
    {
        name: "Platzi 3",
        discount: 25,
    },
];

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

    if (discountValue != 0){
        const precioConDescuento = calcularPrecioDescuento(priceValue, discountValue);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $"+precioConDescuento
    }else {
        const inputCoupon = document.getElementById("input-coupon");
        const couponValue = inputCoupon.value;

        //Compare couponValue with coupon array name
        const isCouponValid = function(coupon){
            return coupon.name === couponValue;
        }

        //Buscar si cualquier name es igual a couponValue
        const userCoupon = coupons.find(isCouponValid);

        if(!userCoupon){
            alert("El cupón "+couponValue+" no es válido")
        } else{
            const descuento = userCoupon.discount;

            const precioConDescuento = calcularPrecioDescuento(priceValue, descuento);

            const resultP = document.getElementById("ResultP");
            resultP.innerText = "El precio con descuento son: $"+precioConDescuento


        }
    }

   
}



