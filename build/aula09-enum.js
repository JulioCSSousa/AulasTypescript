"use strict";
var dias;
(function (dias) {
    //posso retirar os numeros se for sequencia padrão
    dias[dias["sunday"] = 0] = "sunday";
    dias[dias["moonday"] = 1] = "moonday";
    dias[dias["tuesday"] = 2] = "tuesday";
    dias[dias["wednesday"] = 3] = "wednesday";
    dias[dias["thursday"] = 4] = "thursday";
    dias[dias["friday"] = 5] = "friday";
    dias[dias["satuday"] = 6] = "satuday";
})(dias || (dias = {}));
var crres;
(function (crres) {
    crres["branco"] = "#fff";
    crres["preto"] = "#000";
})(crres || (crres = {}));
console.log(dias.friday);
console.log();
const date = new Date();
console.log(date.getDate());
console.log(dias[date.getDay()]);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["User"] = 10] = "User";
    tipoUsuario[tipoUsuario["ADMIN"] = 100] = "ADMIN";
    tipoUsuario[tipoUsuario["SuperUser"] = 1000] = "SuperUser";
})(tipoUsuario || (tipoUsuario = {}));
//posso tipar o enum para retornar apenas um tipo
const tp = tipoUsuario.ADMIN;
