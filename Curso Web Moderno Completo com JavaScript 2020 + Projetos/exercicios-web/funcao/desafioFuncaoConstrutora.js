function Pessoa (nome){
    this.nome = nome
        
    this.falar = () => {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('ADR')
p1.falar()
