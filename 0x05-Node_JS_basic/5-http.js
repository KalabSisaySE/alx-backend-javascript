const http = require('http');
const url = require('url');
// const readFileAsync = require('./2-read_file');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const route = url.parse(req.url).path;
  if (route === '/') {
    res.write('Hello Holberton School!');
  } else if (route === '/students') {
    res.write('This is the list of our students');
    let path = '';
    if (process.argv[2]) {
      path = `./${process.argv[2]}`;
    } else {
      path = './database.csv';
    }
    let numStud = '';
    fs.readFile(path, (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }
      const students = data.toString().split('\n').filter((line) => line.split(',').length === 4);
      // remove the csv header (first element)
      students.shift();
      // find all the unique departments
      const depts = new Set(students.map((student) => student.split(',')[3]));
      numStud = `Number of students: ${students.length}`;
      res.write(numStud);
      const studDept = {};
      depts.forEach((dept) => {
        const names = students.filter(
          (student) => (student.split(',')[3] === dept),
        ).map((student) => student.split(',')[0]);
        studDept[dept] = names;
      });
      for (const dept in studDept) {
        if (studDept[dept]) {
          const str = `Number of students in ${dept}: ${studDept[dept].length}. List: ${studDept[dept].join(', ')}`;
          res.write(str);
        }
      }
    });
    // console.log(numStud);
  }
  res.end();
});

app.listen(1245, '127.0.0.1');
module.exports = app;
