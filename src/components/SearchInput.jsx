import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export const SearchInput = () => {
  const { inputValue, setInputValue, setSearch } = useContext(EmployeeContext);

  const handleSearch = () => {
    setSearch(inputValue);
  };

  return (
    <div className="d-flex flex-column flex-sm-row gap-2 align-items-center">
      <input
        type="text"
        className="form-control w-sm-auto" 
        placeholder="Buscar por ID..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary" 
        onClick={handleSearch}
      >
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};
