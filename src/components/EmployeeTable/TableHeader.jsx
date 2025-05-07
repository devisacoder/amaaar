import React from 'react';
import { flexRender } from '@tanstack/react-table';
import styles from './EmployeeTable.module.css';

export const TableHeader = ({ headerGroups, setSorting }) => (
  <thead className={styles.tableHeader}>
    {headerGroups.map(headerGroup => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map(header => (
          <th key={header.id} style={{ cursor: 'pointer' }}>
            {flexRender(header.column.columnDef.header, header.getContext())}
            {' '}
            <span onClick={() => setSorting([{ id: header.column.id, desc: false }])}>
              ↑
            </span>
            <span onClick={() => setSorting([{ id: header.column.id, desc: true }])}>
              ↓
            </span>
          </th>
        ))}
      </tr>
    ))}
  </thead>
);
