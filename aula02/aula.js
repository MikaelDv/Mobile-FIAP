// lambda
var num = -5;
const resultado = num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Zero";
console.log(resultado)

// destructuring
const pessoa = {
    nome: "Julliana",
    sobrenome: "Amorzinho",
    idade: 18,
    peso: 51,
    endereco:{
        logradouro:"Av. Paulista",
        numero:5000
    }
}

const {sobrenome:s, idade:i,endereco:{logradouro:l}} = pessoa;

console.log(s, i, l)

// Array
const alunos = ["Mikael", "Murilo", "José", "Erick", "Matias"]
const namoradas = ["Julliana", "Rebecca"]

// Concat
const casais = alunos.concat(namoradas)
console.log(casais)

// Push
var nome = "Pedro"
alunos.push(nome)
alunos.push("Arnaldo")
console.log(alunos)

// Sort
console.log(alunos.sort())

//Delete
alunos.pop()

alunos.shift()

alunos.splice(0,3, "Miquéias", "Francisco")

console.log(alunos)

alunos.forEach((name,i) => {
    console.log(name, i)
})

const carros = [
    {modelo:"Corolla", preco:120000, ano:2024, flex:true},
    {modelo:"Civic", preco:140000, ano:2023, flex:false},
    {modelo:"Tiguan", preco:90000, ano:2022, flex:true},
    {modelo:"Lancer", preco:42000, ano:2015, flex:false}
]

console.log(carros.filter((e) => {
    return e.modelo[0] == "C"
}))

console.log(carros.filter((e) => {
    return e.preco > 100000 / e.flex
}))

const mult = (a,b) => a*b;

const calcs = (a,b) => {
    return {
        soma: a+b,
        sub: a-b,
        mult: a*b,
        div: a/b
    }
}

console.log(calcs(2,4));

funcionarios = [
    {nome:"João", idade:25, profissao:"Desenvolvedor"},
    {nome:"Maria", idade:17, profissao:"Designer"},
    {nome:"Carlos", idade:30, profissao:"Desenvolvedor"},
    {nome:"Ana", idade:22, profissao:"Desenvolvedor"}
]

console.log(funcionarios.filter((e) => {
    let {idade:i,profissao:p} = e;

    return i >= 18 && p == "Desenvolvedor"
}))

// Do professor:

function verificarDev(pessoas){
    return pessoas.filter(({idade,profissao}) => {
        return idade >= 18 && profissao === "Desenvolvedor";
    })
}

console.log(verificarDev(funcionarios))