
// if alterno
let fruta = "kiwi";

let resultado= fruta =="uva"? "genial, compro": "no quiero esa caca";

console.log(resultado);



let semaforo= ""

switch (semaforo){
    case "verde":
        console.log("pasa dale");
        break;
    case "amarillo":
        console.log("amarillo no significa pase, significa precaución");
        break;
    case "Rojo":
        console.log ( "frena antes de la linea peatonal ;)");
        break;

    default:
        console.log("no funciona el semaforo");


}


//

let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado>bicicletaB.rodado?: "true","false";

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );

/////

function agregarHttp(url) {
    return "Http://"+ url;
}


console.log(agregarHttp("222.re.222"));







