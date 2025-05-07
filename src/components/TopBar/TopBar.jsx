import { useContext } from "react";
import { SearchInput } from "../SearchInput";
import { EmployeeContext } from "../../context/EmployeeContext";
import style from "./TopBar.module.css";

export const TopBar = () => {
  const { allEmployees } = useContext(EmployeeContext);
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
      <h2 onClick={allEmployees} className={style.h2Eemployees} >Employee List</h2>
      <SearchInput/>
    </div>
  );
}
