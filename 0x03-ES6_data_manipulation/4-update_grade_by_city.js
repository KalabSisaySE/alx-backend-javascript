export default function updateStudentGradeByCity(arr, city, newGrades) {
  const fromCity = arr.filter((elm) => elm.location === city);
  return fromCity.map((elm) => {
    const x = newGrades.find((x) => x.studentId === elm.id);
    const student = elm;
    if (x !== undefined) {
      student.grade = x.grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
}
