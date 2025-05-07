import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';

export const Pagination = () => {
  const { page, totalPages, nextPage, prevPage } = useContext(EmployeeContext);

  return (
    <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-end align-items-center mt-3 gap-2">
      <ButtonGroup>
        <Button variant="link" disabled={page === 1} onClick={prevPage}>
          « Prev
        </Button>
        <Button variant="link" disabled={page === totalPages} onClick={nextPage}>
          Next »
        </Button>
      </ButtonGroup>
    </div>
  );
};
