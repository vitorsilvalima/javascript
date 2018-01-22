const items = [
    {nome: "Vitor", tipo: "pessoa"},
    {nome: "Felipe", tipo: "pessoa"},
    {nome: "morango", tipo: "fruta"},
    {nome: "melao", tipo: "fruta"},
    {nome: "cachorro", tipo: "anima"},
]

const pessoas = items.filter(item => item.tipo === "pessoa")

console.log(pessoas)