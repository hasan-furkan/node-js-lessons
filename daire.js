// Dairenin Alanı = π x r2

const arg = process.argv.slice(2)

const pi = 3.141592653589793

function daire(number) {
    alan = (pi * (number**2))
    console.log(`yaricapi ${number} olan sayinin alani :: ${alan}`)
}


daire(arg * 1)