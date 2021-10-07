//Helpers

function esPar(numero){
    return (numero % 2 ===0);
}

function calcularMediaAritmetica(lista){
    //let , la variable se puede cambiar
    //let sumaLista = 0;

    //for (let i = 0; i < lista.length; i++)
    
   // sumaLista = sumaLista + lista[i];
    

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promediolista = sumaLista/lista.length;
    return promediolista;
}

//Calculadora Mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);


const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%

const spliceStart = (salariosColSorted.length * 0.9);
const spliceCount = salariosColSorted.length - spliceStart;
//Se creó un array con las últimas 10 personas del array de salarios (El top 10% de salarios)
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});