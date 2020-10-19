class Pessoa{
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('ADR')

p1.falar()

const criarPessoa = nome => {
    return {
        nome,
        falar: () => {
            console.log(`Meu nome é ${nome}`)
        }
    }    
}

const p2 = criarPessoa('AD')
p2.falar()