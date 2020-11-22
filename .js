function agregarHttp(url) {
    return "Http://"+ url;
}


function procesar(array,callback){
     
    let arrayFinal=[];

    for (let i=0;i<array.length;i++){

      arrayFinal.push(callback(array[i]));
        
      
        };

  return arrayFinal;
 };

 console.log(procesar(["www.ddd.com","www.dsds.com"],agregarHttp));

 



