export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const elm of array) {
    newArray.push(appendString + elm);
  }

  return newArray;
}
