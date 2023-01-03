export default function updateStudentGradeByCity(arr, city, newGrades) {
  const fromCity = arr.filter((elm) => elm.location === city);
  return fromCity.map((elm) => {
    const x = newGrades.find((x) => x.studentId === elm.id);
    const student = elm;
    student.grade = x ? x.grade : 'N/A';
    return student;
  });
}
