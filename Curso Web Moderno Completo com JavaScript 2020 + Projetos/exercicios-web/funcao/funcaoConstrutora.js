function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    // metodo público
    this.aceletar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }

        else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo piblico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual    
    }
}

const uno = new Carro // equivalente a new Carro()
uno.aceletar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.aceletar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) //funçao
console.log(typeof ferrari) //objeto instanciado a partir de uma função