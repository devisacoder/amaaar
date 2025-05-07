export function filterEmployeesBySearch(employees, search) {
  if (!search) return employees;
  return employees.filter(emp => emp.id.toString().includes(search));
}

export function paginateEmployees(employees, page, perPage) {
  const start = (page - 1) * perPage;
  return employees.slice(start, start + perPage);
}