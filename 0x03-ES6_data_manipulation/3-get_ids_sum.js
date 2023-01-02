export default function getStudentIdsSum(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
