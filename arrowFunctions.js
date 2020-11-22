let laMitad = numero => numero /2;

console.log(laMitad(8));


let dividir = (numero1,numero2)=> numero1/numero2; 

console.log(dividir(10,2));

let seLaburaONo = dia=>{
    if(dia == "sábado"|| dia =="domingo"){
        return "flaco,no tenes que laburar, volve a la cama";

    }else{
        return "flaco que haces durmierndo todavia?, tenes que ir a laburar";
    }

};


console.log(seLaburaONo("Lunes"));

