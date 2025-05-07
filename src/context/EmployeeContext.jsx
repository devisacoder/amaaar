import { createContext, useState, useEffect, useCallback } from 'react';
import { fetchEmployees } from '../services/employeeService';
import { filterEmployeesBySearch, paginateEmployees } from '../utils/employeeUtils';

export const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [all, setAll] = useState([]);
  const [visible, setVisible] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    (async () => {
      try {
        const list = await fetchEmployees();
        setAll(list);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const recalc = useCallback(() => {
    const filtered = filterEmployeesBySearch(all, search);
    const paginated = paginateEmployees(filtered, page, perPage);
    setVisible(paginated);
  }, [all, page, search]);

  useEffect(() => {
    recalc();
  }, [recalc]);

  const allEmployees = () => {
    setSearch('');           
    setInputValue('');       
    setPage(1);              
  };

  const totalPages = Math.ceil(
    filterEmployeesBySearch(all, search).length / perPage
  );

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <EmployeeContext.Provider
    value={{
      visible,
      loading,
      search,
      setSearch,
      inputValue,
      setInputValue,
      page,
      totalPages,
      nextPage,
      prevPage,
      allEmployees
    }}
  >
    {children}
  </EmployeeContext.Provider>
  );
}
