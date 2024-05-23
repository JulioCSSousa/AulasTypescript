"use strict";
class Curso {
    canal;
    curso;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso("typescript", "curso type");
let c2 = new Curso("a", "a");
console.log(c1);
console.log(c2);
