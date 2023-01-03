export default function cleanSet(set, startString) {
  const arr = [];
  for (const elm of set) {
    if (startString.length > 0 && elm.startsWith(startString)) {
      arr.push(elm.substring(startString.length));
    }
  }
  return arr.join('-');
}
