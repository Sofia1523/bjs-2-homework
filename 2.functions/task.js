function getArrayParams(...arr) {
  if (arr.length === 0) return { min: 0, max: 0, avg: 0 };
  
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, val) => acc + val, 0);
  let avg = +(sum / arr.length).toFixed(2);
  
  return { min, max, avg };
}

function summElementsWorker(...arr) {
  return arr.length === 0 ? 0 : arr.reduce((acc, val) => acc + val, 0);
}

function differenceMaxMinWorker(...arr) {
  return arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0, sumOddElement = 0;
  
  for (let num of arr) {
      num % 2 === 0 ? sumEvenElement += num : sumOddElement += num;
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0, countEvenElement = 0;
  
  for (let num of arr) {
      if (num % 2 === 0) {
          sumEvenElement += num;
          countEvenElement++;
      }
  }
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let arr of arrOfArr) {
      let result = func(...arr);
      if (result > maxWorkerResult) {
          maxWorkerResult = result;
      }
  }
  return maxWorkerResult;
}
