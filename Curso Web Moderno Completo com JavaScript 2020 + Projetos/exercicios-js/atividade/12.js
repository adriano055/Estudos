function fatorial (n){
    let total = 1

    if(n == 0 || n == 1){
        return 1
    }

    else{
        for(let i = 0 ; i < n ; i++){
            total = total * (i+1)
        }

        return total
    }
}

console.log(fatorial(8))

