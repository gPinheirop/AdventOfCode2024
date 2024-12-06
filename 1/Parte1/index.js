import { leftList, rightList } from "../values.js";

function findDistancy(x, y) {
  return x >= y ? x - y : y - x;
}

// Execução do código

let totalDistancy = 0;
console.log("Começo", Date.now());

let sortedLeftList = leftList.toSorted();
console.log("Lista da esquerda organizada", Date.now());
sortedLeftList.reverse();
console.log("Lista da esquerda revertida", Date.now());

let sortedRightList = rightList.toSorted();
console.log("Lista da direita organizada", Date.now());
sortedRightList.reverse();
console.log("lista direita revertida ", Date.now());

while (sortedLeftList.length > 0) {
  let minLeftValue = sortedLeftList.pop();
  let minRightValue = sortedRightList.pop();

  totalDistancy += findDistancy(minLeftValue, minRightValue);
}

console.log(totalDistancy);
console.log("fim", Date.now());
