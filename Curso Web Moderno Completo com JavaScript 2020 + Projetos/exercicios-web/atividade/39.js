function troca (v1,v2){
    for(let i = 0 ; i < v1.length ; i++){
        v1[i] = v1[i] + v2[i]
        v2[i] = v1[i] - v2[i]
        v1[i] = v1[i] - v2[i]
    }
    console.log(v1)
    console.log(v2)
}

let v1 = [1,2,3]
let v2 = [5,7,2]

troca(v1, v2)