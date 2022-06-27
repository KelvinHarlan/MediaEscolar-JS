/*Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.*/

function MediaDoAluno(nota1, nota2) {
    let resultado = (nota1 + nota2) / 2
    if (resultado >= 7 && resultado < 10) {
        console.log(`Sua média é ${resultado}, você está aprovado!`)
    }
    else if (resultado === 10) {
        console.log(`Sua média é ${resultado}, parabéns, você foi aprovado com nota máxima!`)
    }
    else if (resultado < 7) {
        console.log(`Sua média é ${resultado}, você está Reprovado!`)
    }
    else {
        console.log('Dados inválidos')
    }

}

MediaDoAluno(nota1 = 7, nota2 = 7)