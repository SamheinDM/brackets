module.exports = function check(str, bracketsConfig) {
  let a = str;
  let arr = bracketsConfig;
  let result = '';

  for(let i = 0; i<a.length; i++) {
    let equal = check_equal(a[i], arr);
    for(let j = 0; j<arr.length; j++) {
      if(equal[1] == true) {
        j = equal[0];
        if(a[i] === arr[equal[0]][0] && result[result.length -1] === arr[equal[0]][0]) {
          result = result.substring(0, result.length -1);
          break;
        } else {
          result += a[i];
          break;
        }
      } else {
        if(a[i] === arr[j][0]) {
          result += a[i];
        } else if(a[i] === arr[j][1] && result === '') {
          return false;
        } else if(a[i] === arr[j][1] && result[result.length -1] === arr[j][0]) {
          result = result.substring(0, result.length -1);
        }
      }
      console.log(i + ' ' + result);
    }
  }
  
  function check_equal(letter, array) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
      if(letter === array[i][0]) {
        if(array[i][0] === array[i][1]) {
          result = [i, true];
          return result;
        }
      }
    }
    result = [0, false];
    return result;
  }

  if(result.length == 0){
    return true;
  } else {
    return false;
  }
}