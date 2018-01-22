/**function maiorQue(numero){
    return function(x){
        return x > numero
    }
}*/

const maiorQue = numero => x => x > numero

const maiorQue20 = maiorQue(20)

console.log(maiorQue20(21))