import { reports } from "../values.js";

let safeReports = 0;

function detectDelta(report) {
  let areEquals = report[0] === report[1];
  let isIncreasing = report[0] < report[1] && report[1] - report[0] <= 3;
  let isDeceasing = report[0] > report[1] && report[1] - report[0] >= -3;

  if (!areEquals) {
    if (isDeceasing) {
      decreaseTest(report);
    } else if (isIncreasing) {
      increaseTest(report);
    }
  }
}

function decreaseTest(report) {
  for (let index = 1; index < report.length; index++) {
    let previusValue = report[index - 1];
    let actualValue = report[index];
    let areEquals = actualValue === previusValue;
    let isInceasing = actualValue > previusValue;
    let isOverDecreasing = actualValue - previusValue < -3;

    if (areEquals || isInceasing || isOverDecreasing) {
      return;
    }
  }
  safeReports++;
}

function increaseTest(report) {
  for (let index = 1; index < report.length; index++) {
    let previusValue = report[index - 1];
    let actualValue = report[index];
    let isEquals = actualValue === previusValue;
    let isDecreasing = actualValue < previusValue;
    let isOverInceasing = actualValue - previusValue > 3;

    if (isEquals || isDecreasing || isOverInceasing) {
      return;
    }
  }
  safeReports++;
}

for (let index = 0; index < reports.length; index++) {
  detectDelta(reports[index]);
}

console.log(safeReports);
