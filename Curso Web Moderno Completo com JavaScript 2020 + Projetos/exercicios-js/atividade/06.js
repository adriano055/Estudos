function js(capital,juros,tempo){
    return capital*(1+(juros*tempo))
}

function jc(capital,juros,tempo){
    for(let i = 0 ; i < tempo ; i++){
        capital = capital * (1 + juros)
    }
    return capital.toFixed(2)
}

console.log(js(10,0.3,3))
console.log(jc(10,0.3,3))