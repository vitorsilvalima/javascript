const numeros = [10, 20, 30, 40, 50]

const soma = (acc, item) => acc + item

const total = numeros.reduce(soma)

console.log(total)