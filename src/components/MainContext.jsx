import { useContext, lazy, Suspense } from 'react';
import {TopBar} from './TopBar/TopBar';
import {EmptyState} from './EmptyState';
import {Pagination} from './Pagination';
import { EmployeeContext } from '../context/EmployeeContext';
import '../styles/MainContext.module.css';

const EmployeeTable = lazy(() => import('./EmployeeTable/EmployeeTable'));

export const MainContent = () => {
  const { visible, loading  } = useContext(EmployeeContext);

  return (
    <main className="main-content flex-fill p-4 overflow-auto">
      <TopBar/>
      {loading ? (
        <p>Cargando…</p>
      ) : visible.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <Suspense fallback={<p>Cargando tabla…</p>}>
            <EmployeeTable />
          </Suspense>
          <Pagination />
        </>
      )}
    </main>
  );
}
