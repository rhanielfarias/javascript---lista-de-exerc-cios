//Exercício1
const nomes = ['Rhaniel', 'Paulo', 'Ana'];
nomes.forEach(elemento => {
    console.log(elemento);
});

//Exercício2
const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tabuada.forEach((elementos => {
    let multiplicacao = elementos * 2;
    console.log(multiplicacao)
}))

//Exercício3
const numeros = [10, 5, 3];
function soma(array) {
    let resultado = 0;
    array.forEach(elementos => {
        resultado = elementos + resultado;
    })
    return resultado;
}
console.log(soma(numeros))

//Exercício4
const quadrado = [2, 7, 11]
const resultadoDoQuadrado = quadrado.map(elementos => {
    return elementos * elementos
})
console.log(resultadoDoQuadrado)

//Exercício5
const animais = ['cavalo', 'cachorro', 'gato', 'girafa', 'coelho', 'coruja'];
const animaisEmMaiusculo = animais.map(elemento => elemento.toLocaleUpperCase())
console.log(animaisEmMaiusculo)

//Exercício6
const multiplica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function calcularMultiplicação(array, argumento) {
    const resultado = array.map(elemento => numero = elemento * argumento)
    return resultado;
}
console.log(calcularMultiplicação(multiplica, 2),)

//Exercício7
const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosPares = numerosInteiros.filter(elemento => elemento % 2 === 0)
console.log(numerosPares);

//Exercício8
const frutas = ['maçã', 'laranja', 'manga', 'banana', 'mamão', 'vergamota', 'morango'];
const frutasComALetraM = frutas.filter(elemento => elemento.toLocaleUpperCase().startsWith('m') || elemento.toLocaleLowerCase().startsWith('m'))
console.log(frutasComALetraM)

//Exercício9
const numerosMaiores = [10, 20, 30, 50, 60];
function filtroDeNumeros(array, argumento) {
    const comparacao = array.filter(elemento => elemento >= argumento)
    return comparacao;
}
console.log(filtroDeNumeros(numerosMaiores, 20))

//Exercício10
const numerosParaSomar = [5, 10, 8]
const resultadoDaSoma = numerosParaSomar.reduce((acumulador, elemento) => acumulador + elemento)
console.log(resultadoDaSoma)

//Exercício11
const palavras = ['Olá ', 'pequeno ', 'gafanhoto.']
const pequenoGafanhoto = palavras.reduce((acumulador, elemento) => acumulador + elemento)
console.log(pequenoGafanhoto)

//Exercício12
const mediaDaProva = [5, 8, 9, 10];
function calcularMedia(array) {
    const media = mediaDaProva.reduce((acumulador, elemento) => acumulador + elemento)
    const resultado = media / 4;
    return resultado;
}
console.log(calcularMedia(mediaDaProva))