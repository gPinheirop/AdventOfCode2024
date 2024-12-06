import { reports } from "../values.js";

let safeReports = 0;

function controlReportTest(report) {
  let decrreaseTestResult = decreaseTest(report);
  let increaseTestResult = increaseTest(report);

  if (increaseTestResult.length === 0 || decrreaseTestResult.length === 0) {
    safeReports++;
    return;
  }

  for (let index = 0; index < report.length; index++) {
    const newReport = report.toSpliced(index, 1);
    let a = decreaseTest(newReport);
    let b = increaseTest(newReport);
    if (a.length === 0 || b.length === 0) {
      safeReports++;
      return;
    }
  }

  // if (decrreaseTestResult.length === 1) {
  //   let newReportA = report.toSpliced(decrreaseTestResult[0], 1);
  //   let newReportB = report.toSpliced(decrreaseTestResult[0] - 1, 1);
  //   let reportTestAResult = decreaseTest(newReportA);
  //   let reportTestBResult = decreaseTest(newReportB);

  //   if (reportTestAResult.length === 0 || reportTestBResult.length === 0) {
  //     safeReports++;
  //   }
  // }

  // if (increaseTestResult.length === 1) {
  //   let newReportA = report.toSpliced(increaseTestResult[0], 1);
  //   let newReportB = report.toSpliced(increaseTestResult[0] - 1, 1);
  //   let reportTestAResult = increaseTest(newReportA);
  //   let reportTestBResult = increaseTest(newReportB);

  //   if (reportTestAResult.length === 0 || reportTestBResult.length === 0) {
  //     safeReports++;
  //   }
  // }
}

function decreaseTest(report) {
  let errorIndexes = [];
  for (let index = 1; index < report.length; index++) {
    const delta = report[index] - report[index - 1];

    if (delta > -1 || delta < -3) {
      errorIndexes.push(index);
    }
  }
  return errorIndexes;
}

function increaseTest(report) {
  let errorIndexes = [];
  for (let index = 1; index < report.length; index++) {
    const delta = report[index] - report[index - 1];

    if (delta < 1 || delta > 3) {
      errorIndexes.push(index);
    }
  }
  return errorIndexes;
}

reports.forEach((report) => {
  controlReportTest(report);
});

console.log(safeReports);
