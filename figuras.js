// Constr, nunca se cambia el valor de la variable
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+" cm");

function perimetroCuadrado(lado) { 
    return lado*4
};
console.log("El perímetro del cuadrado es: "+perimetroCuadrado+" cm");

function areaCuadrado(lado){
    return lado*lado
};
console.log("El área del cuadrado es: "+areaCuadrado+" cm^2");
console.groupEnd();

//Código del tríangulo
console.group("Triángulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "Los lados del triángulo miden: "+ladoTriangulo1
    +" cm, "+ladoTriangulo2
    +" cm, "
    +baseTriangulo
    +" cm"
);

console.log("La altura del triángulo es de: "+alturaTriangulo+" cm");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base
}
    //console.log("El perímetro del triángulo es: "+perimetroTriangulo+" cm");

function areaTriangulo(base, altura){
    return (base*altura)/2;
} 
//console.log("El área del triángulo es "+areaTriangulo+" cm^2")

console.groupEnd();

//Código del Círculo 
console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: "+radioCirculo+" cm");

//Diámetro
function diametroCirculo(radio){
    return radio*2;
} 
//console.log("El diámetro del círculo es: "+diametroCirculo+" cm");

//PI
const PI = Math.PI;
console.log("PI es "+PI);

//Circunferencia
function perimetroCirculo(radio){
    return diametroCirculo(radio)*PI;
} 
//console.log("El perímetro del círculo es: "+perimetroCirculo+" cm");

//Área
function areaCirculo(radio){
    return (radio*radio)*PI;
}
//console.log("El área del círculo es: "+areaCirculo+" cm^2")

console.groupEnd();

//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}