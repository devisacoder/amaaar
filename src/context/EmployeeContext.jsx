import { createContext, useState, useEffect, useCallback } from 'react';
import { fetchEmployees } from '../services/employeeService';

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

    let filtered = all;
    
    if (search.trim()) {
      filtered = all.filter((e) =>
        e.id.toString().includes(search.trim())
    );
  }
  
  const start = (page - 1) * perPage;
  setVisible(filtered.slice(start, start + perPage));

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
    all.filter((e) => e.id.toString().includes(search || '')).length / perPage
  );

  const nextPage = () => {
    if (page < totalPages) {
      const np = page + 1;
      setPage(np);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      const np = page - 1;
      setPage(np);
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
