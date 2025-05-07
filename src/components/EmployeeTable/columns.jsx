import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import Avatar from "boring-avatars";

const columnHelper = createColumnHelper();

export const generateColumns = () => [
  columnHelper.accessor('image', {
    header: 'IMAGE',
    cell: ({ row }) => <Avatar 
      name={row.original.name} 
      variant='beam' 
      size={40}
      colors={["#a8a7a7", "#0f77b8", "#2c4a68", "#626060", "#e0e0e0"]}
    />
  }),
  columnHelper.accessor('id', {
    header: 'ID',
    cell: info => info.getValue()
  }),
  columnHelper.accessor('name', {
    header: 'NAME',
    cell: info => info.getValue()
  }),
  columnHelper.accessor('age', {
    header: 'AGE',
    cell: info => info.getValue()
  }),
  columnHelper.accessor('salary', {
    header: 'SALARY',
    cell: info => info.getValue()
  })
];
