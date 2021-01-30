const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //retorna undefined

valores[4] = 10
console.log(valores)
console.log(valores.length) //sem () array como objeto

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //pega o ultimo e o remove
//console.log(valores[-1]) n funciona igual python

delete valores[0]

console.log(valores)

const t = t[1 + valores.length()]

console.log(t)