
function getMinMax(str) {
  let arr = [];
  let arrNew = [];
  let arrNum = [];
  let num;

  let result = {};
  arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    num = Number(arr[i]);
    arrNew.push(num);
  }

  for (let i = 0; i < arrNew.length; i++) {
    
    if (arrNew[i] = arrNew[i]) {
      arrNum.push(arrNew[i]);
    }
  }

  let arrMax = arrNew.slice();

  for (let i = 0; i < arrNum.length; i++) {
    
    if (arrNum[i] < arrNum[i + 1]) {
      arrNum[i + 1] = arrNum[i];
    }

    result.min = arrNum[i];
  }

  for (let i = 0; i < arrMax.length; i++) {
    
    if (arrMax[i] > arrMax[i + 1]) {
      arrMax[i + 1] = arrMax[i];
    }

    result.max = arrMax[i];
  }

  return result;
}
