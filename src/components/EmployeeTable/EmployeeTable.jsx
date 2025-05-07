import { useContext, useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useReactTable, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table';
import { EmployeeContext } from '../../context/EmployeeContext';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { generateColumns } from './columns';
import style from './EmployeeTable.module.css';

export const EmployeeTable = () => {
  const { visible } = useContext(EmployeeContext);
  const [sorting, setSorting] = useState([]);
  const data = useMemo(() => visible, [visible]);
  const columns = useMemo(() => generateColumns(), []);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableSortingRemoval: false
  });

  return (
    <div className={style.tableResponsive}>
      <Table hover borderless responsive className="mb-0">
        <TableHeader headerGroups={table.getHeaderGroups()} setSorting={setSorting} />
        <TableBody rows={table.getRowModel().rows} />
      </Table>
    </div>
  );
};

export default EmployeeTable;
