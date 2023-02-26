const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, (err, data) => {
    try {
      const students = data.toString().split('\n').filter((line) => line.split(',').length === 4);
      // remove the csv header (first element)
      students.shift();
      // find all the unique departments
      const depts = new Set(students.map((student) => student.split(',')[3]));
      console.log(`Number of students: ${students.length}`);
      const studDept = {};
      depts.forEach((dept) => {
        const names = students.filter(
          (student) => (student.split(',')[3] === dept),
        ).map((student) => student.split(',')[0]);
        studDept[dept] = names;
      });
      for (const dept in studDept) {
        if (studDept[dept]) {
          console.log(`Number of students in ${dept}: ${studDept[dept].length}. List: ${studDept[dept].join(', ')}`);
        }
      }
    } catch (err) {
      throw new Error('Cannot load the database');
    }
  });
}
module.exports = countStudents;
