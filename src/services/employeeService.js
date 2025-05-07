
const BASE_URL = 'http://localhost:8080/employees';

export async function fetchEmployees() {
  const response = await fetch(BASE_URL);
  const json = await response.json();


  if (!response.ok) {
    throw new Error(`Error al obtener empleados: ${response.status} ${response.statusText}`);
  }

  if (!Array.isArray(json)) {
    throw new Error('La respuesta no es un array');
  }

  return json.map(emp => ({
    id: emp.id,
    name: emp.employee_name,
    salary: emp.employee_salary,
    age: emp.employee_age,
    avatar: emp.profile_image
  }));
}
