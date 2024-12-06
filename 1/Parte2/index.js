import { leftList, rightList } from "../values.js";

let similarityScore = 0;

for (let index = 0; index < leftList.length; index++) {
  const repetitions = rightList.filter(
    (rightListValue) => rightListValue === leftList[index]
  );

  similarityScore += leftList[index] * repetitions.length;
}

console.log(similarityScore);
