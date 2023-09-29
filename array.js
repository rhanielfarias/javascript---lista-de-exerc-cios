///Exercício1
let listaDeNumeros = [];
for (i = 1; i < 4; i++) {
    listaDeNumeros.push(i);
}
console.log(listaDeNumeros)

//Exercício2
let frutas = ['Banana', 'Laranja', 'Morango'];
frutas.push('Abacaxi')
console.log(frutas)

//Exercício3
function adicionarFrutas(array, elemento) {
    let novasFrutas = array.push(elemento);
    return array;
}
console.log(adicionarFrutas(frutas, 'Vergamota'));

//Exercício4
const elementos = [1, 2, 3, 4, 5];
elementos.pop();
console.log(elementos)

//Exercicio5
let veiculos = ['Carro', 'Moto', 'Caminhão', 'bicicleta', 'ônibus'];
while (veiculos.length > 0) {
    console.log(veiculos);
    veiculos.pop();
}

//Exercício6
let numeros = [1, 2, 3];
function removeElemento(array) {
    const exclue = array.pop();
    return exclue;
}
console.log(removeElemento(numeros))
//Exercício7
let numerosInteiros = [11, 12, 13];
numerosInteiros.shift();
console.log(numerosInteiros)

//Exercício8
let cidades = ['Pelotas', 'Rio Grande', 'Porto Alegre', 'Capão do Leão', 'Morro Redondo', 'Cangu-sul'];
while (cidades.length > 0) {
    console.log(cidades);
    cidades.shift()
}

//Exercício9
let idades = [25, 18, 30, 54];
function removePrimeiraIdade(array) {
    let exclue = array.shift();
    return exclue;
}
console.log(removePrimeiraIdade(idades))

//Exercícío10
const nomes = [];
nomes.unshift('Rhaniel', 'Paulo', 'Ana')
console.log(nomes)

//Exercício11
let cores = ['Vermelho', 'Branco', 'Verde', 'Preto'];
cores.unshift('Azul');
console.log(cores)
//Exercício12
let timesDeFutebol = ['Internacional', 'São Paulo'];
function adicionarNomeNoInicio(array, elemento) {
    array.unshift(elemento);
    return array;
}
console.log(adicionarNomeNoInicio(timesDeFutebol, 'Grêmio'))