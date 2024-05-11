// //Lista:
 const pessoas = ['1', '2', '3']


// //adicionar um item a lista
// pessoas.push('4')


// //remover o ultimo item
// pessoas.pop()


// //adicionar um item a primeira posição do array
// pessoas.unshift('caio')


// //remover o primeiro item
// pessoas.shift()


// //atualizar o valor de um array
// pessoas[1] = '5'


// pessoas.forEach(
//     function passarNomes(pessoa){
//         console.log(`ola ${pessoa.toLowerCase()}`)
//     }
// )
// //arrow funtion (=>)
// pessoas.forEach(pessoa => console.log(`olá ${pessoa.toLowerCase()}`));
// //arrow funtion tira o parenteses do parâmetro, não precisa da palavra 'funtion', nome da função

// pessoas.map(pessoa => )


const numeros = [1, 2, 3]

function dobrar(array){
    return array.map(numeros => numeros*2)
}
console.log(dobrar(numeros))

//extensão para print educativo "fotosnap"



const palavras = ['oi', 'tudo', 'bem']

function caixaAlta(up){
    return up.map(lista => lista.toUpperCase())
}
console.log(caixaAlta(palavras))
