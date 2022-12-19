export default function createReportObject(employeesList) {
  const all = { allEmployees: { ...employeesList } };
  all.getNumberOfDepartments = function () {
    return Object.keys(this.allEmployees).length;
  };

  return all;
}
