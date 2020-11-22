
// creacion de objetos con metodos
let miPais = {
    nombre : "Rep.Dominicana",
    poblacion : 1000000000,
    capital : "Santo Domingo",
    notificaciones: function(){
        return "vos no sos bienvenido a"+ " " + miPais.nombre;
    },
    decirDeDondeSoy: function(){
        return "Soy de + this.nombre";


    }
};

console.log(miPais.notificaciones());











