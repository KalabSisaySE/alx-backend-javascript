export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = array;
  for (const index of arrayCopy.keys()) {
    arrayCopy[index] = appendString + arrayCopy[index];
  }

  return array;
}
