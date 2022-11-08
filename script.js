const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
const mySet = new Set(arr);

return [...mySet]; // as reticências vai formar um novo array (argumento rest)
}

console.log(valoresUnicos(meuArray));