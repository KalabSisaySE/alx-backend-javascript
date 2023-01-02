export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr)) {
    return arr.filter((x) => x.location === city);
  }
  return [];
}
