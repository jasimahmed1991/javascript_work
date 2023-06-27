
// merge two arrays in asc order and remove the duplcate values

const arr1 = [1,3,4,5,5];
const arr2 = [2,4,4,6,8];

let arr3 = [...arr1,...arr2];
console.log(arr3);
arr3.sort((a,b)=>a-b);

//we can use set to remove duplicates,but this is done by set
//arr3 = [new Set(arr3)];
arr3 = [...new Set(arr3)];
console.log(arr3);