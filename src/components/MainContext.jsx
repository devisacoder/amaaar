import { useContext } from 'react';
import {TopBar} from './TopBar/TopBar';
import {EmployeeTable} from './EmployeeTable/EmployeeTable';
import {EmptyState} from './EmptyState';
import {Pagination} from './Pagination';
import { EmployeeContext } from '../context/EmployeeContext';

export const MainContent = () => {
  const { visible, loading  } = useContext(EmployeeContext);

  return (
    <main className="flex-fill p-4 overflow-auto" style={{ backgroundColor:'#F4F6FA'}}>
      <TopBar/>
      {loading ? (
        <p>Cargando…</p>
      ) : visible.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <EmployeeTable />
          <Pagination />
        </>
      )}
    </main>
  );
}
