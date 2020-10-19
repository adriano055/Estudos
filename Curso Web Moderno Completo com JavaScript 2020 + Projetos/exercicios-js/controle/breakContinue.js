const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if(x == 5){
        break
    }
    console.log(`${x} =  ${nums[x]}`)
}

console.log(`--------------`)

for(y in nums){
    if(y == 5){
        continue //pula o restante dessa ação desse passo do loop
    }
    console.log(`${y} =  ${nums[y]}`)
}

externo: for (a in nums){ //rotulo nomedo externo
    for (b in nums){
        if(a == 2 && b == 3) break externo //break age no laço nomeado de externo
        console.log(`Par = ${a},${b}`) 
    }
}

