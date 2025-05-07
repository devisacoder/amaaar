import React from 'react';
import { flexRender } from '@tanstack/react-table';
import styles from './EmployeeTable.module.css';

export const TableBody = ({ rows }) => (
  <tbody className={styles.tableBody}>
    {rows.map(row => (
      <tr key={row.id}>
        {row.getVisibleCells().map(cell => (
          <td key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);
