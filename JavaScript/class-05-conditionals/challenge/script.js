// Crie um algoritmo que solicite o Nome e notas 1 e 2 do aluno
// Crie uma função para calcular a sua média e sua situação
// Depois apresente o nome do aluno sua média e sua situação
// O aluno será aprovado somente SE ele teve média maior ou igual 7

// let aluno = prompt("Digite o nome do aluno")
// let nota1 = Number(prompt("Digite a nota 1 do aluno:"))
// let nota2 = Number(prompt("Digite a nota 2 do aluno:"))
// let media = (nota1 + nota2) / 2
// let resultado = media
// function calcMedia(nota1, nota2) {
//     return (nota1 + nota2) / 2
// }

// if (media >= 7) {
//     resultado = document.write(`A média do ${aluno} é: ${media}, Aprovado!`)
// } else {
//     resultado = document.write(`A média do ${aluno} é: ${media}, Reprovado!`)
// }


// Crie um algoritmo que tenha 3 funções que faça a média,
// Transforme essa média para o sistema de caracteres ABC
// Depois diga se o aluno foi aprovado (A, B e C) ou reprovado (D e F):
// As funções devem funcionar com strings e notas inválidas devem retornar mensagem de erro.

// A: 90 - 100
// B: 80 - 89
// C: 70 - 79
// D: 60 - 69
// F:  < - 60

function averageCalculate(note1, note2) {
    let average = (Number(note1) + Number(note2)) / 2

    if (!average) {
        average = "Insira somente notas válidas!"
    }

    return average
}

function abcConvert(average) {
    let notaABC

    Number(average)
    if (average >= 90 && average <=100){
        notaABC = 'A'
    }
    else if (average >= 80 && average <=89){
        notaABC = 'B'
    }
    else if (average >= 70 && average <=79){
        notaABC = 'C'
    }
    else if (average >= 60 && average <=69){
        notaABC = 'D'
    }
    else if (average >= 0 && average <=59){
        notaABC = 'F'
    }
    else {
        notaABC = 'Média inválida!'
    }

    return notaABC
}

function estudantSituation(noteABC){
    let situation

    switch (noteABC){
        case 'A':
            situation = 'Excelente, aprovado com A!'
            break
        case 'B':
            situation = 'Muito bem, aprovado com B!'
            break
        case 'C':
            situation = 'Aprovado com C!'
            break
        case 'D':
            situation = 'Foi quase, reprovado com D!'
            break
        case 'F':
            situation = 'Precisa estudar mais, reprovado com F!'
            break
        default:
            situation = 'Nota ABC Inválida!'
    }
    return situation
}

let note1 = 80
let note2 = "90"

let avaregeStudant = averageCalculate(note1, note2)
console.log(avaregeStudant)

let abcAvarege = abcConvert(avaregeStudant)
console.log(abcAvarege)

let situation = estudantSituation(abcAvarege)
console.log(situation)
