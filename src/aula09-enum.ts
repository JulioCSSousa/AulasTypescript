enum dias{
    //posso retirar os numeros se for sequencia padrão
    sunday=0,
    moonday=1,
    tuesday=2,
    wednesday=3,
    thursday=4,
    friday=5,
    satuday=6

}
enum crres{
    branco="#fff",
    preto="#000"
}
console.log(dias.friday)
console.log()
const date = new Date()
console.log(date.getDate())
console.log(dias[date.getDay()])

enum tipoUsuario{
    User=10,
    ADMIN = 100,
    SuperUser=1000,
    
}

//posso tipar o enum para retornar apenas um tipo
const tp: tipoUsuario=tipoUsuario.ADMIN