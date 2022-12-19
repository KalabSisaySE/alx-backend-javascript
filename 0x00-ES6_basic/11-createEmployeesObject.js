export default function createEmployeesObject(departmentName, employees) {
  const obj = {};
  obj[departmentName] = [];

  for (const employee of employees) {
    obj[departmentName].push(employee);
  }

  return obj;
}
