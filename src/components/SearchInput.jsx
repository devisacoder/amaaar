import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export const SearchInput = () => {
  const { inputValue, setInputValue, setSearch } = useContext(EmployeeContext);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!/^[0-9]*$/.test(inputValue)) {
      setError("Por favor, ingrese solo números.");
      return;
    }
    setError("");
    setSearch(inputValue);
  };

  return (
    <div className="d-flex flex-column flex-sm-row gap-2 align-items-center">
      <input
        type="text"
        className={`form-control w-sm-auto ${error ? "is-invalid" : ""}`}
        placeholder="Buscar por ID..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        aria-label="Buscar empleado por ID"
        aria-invalid={!!error}
      />
      <button
        className="btn btn-outline-secondary"
        onClick={handleSearch}
        aria-label="Buscar"
      >
        <i className="bi bi-search" aria-hidden="true"></i>
      </button>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
