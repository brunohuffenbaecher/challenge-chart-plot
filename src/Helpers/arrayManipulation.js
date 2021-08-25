/**Insert data obj using in the array an ascending order algorithm */
export const insertAndSort = (array, obj) => {
  let arr = [...array];
  let insertIndex = 0;
  let newTS = obj.timestamp;
  for (let k = 0; k < arr.length; k++) {
    // console.log(newTS);
    // console.log(arr[k].timestamp);
    if (newTS > arr[k].timestamp) {
      insertIndex = k + 1;
    } else {
      break;
    }
  }
  // console.log(insertIndex);
  // console.log(insertIndex);
  arr.splice(insertIndex, 0, obj);
  console.log(arr);
  return arr;
};
