
// maquina para generar cursos(funcion constructora de obejtos)
function Curso(cantidadDeAlumnos,docente, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docente = docente;
    this.horario = horario;

};

// Creando nuevo objeto

let nuevoCurso=new Curso(48,["jassiel"],"de 17 a 22 hs");
let nuevoCurso2=new Curso(10,["jassiel", "marce", "jairo"],"de 20 a 22hs");



console.log(nuevoCurso);
console.log(nuevoCurso2);

