//declarações array
let numeroReadOnly: readonly (number|string) [] = [1,5,6,8,9,"s","f","h"]
let numeros:Array<number|number> = []
let numerosDeclare:(string|number)[] = []

//metodos
numeros.push(5, 3, 4, 8) //no fim
numeros.unshift() //no começo
numeros.pop() //tira do fim
numeros.shift() //tira do inicio

console.log(numeroReadOnly)
