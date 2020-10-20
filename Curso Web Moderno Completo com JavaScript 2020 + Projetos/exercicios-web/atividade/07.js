function bhaskara (a,b,c) {
    delta = (b**2) - (4*a*c)

    if(delta < 0){
        return 'Delta é negativo'
    }

    else{
        let raizes = []

        let raiz1 = (- b + (delta**(1/2))) / (2*a)
        let raiz2 = (- b - (delta**(1/2))) / (2*a)

        raizes.push(raiz1,raiz2)
        return raizes
    }
}

console.log(bhaskara(7,3,4))