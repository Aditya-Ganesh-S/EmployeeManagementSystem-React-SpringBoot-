import React from "react";
import EmployeeService from "../services/EmployeeService";
import {useNavigate} from 'react-router-dom'

export const AddEmployee = () => {
  const [employee, setEmployee] = React.useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({
      ...employee,
      [e.target.name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((res) => {
        console.log(res);
        navigate("/employeeList")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setEmployee({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
        });
  }

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="text"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={handleSave}
            className="rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700"
          >
            Save
          </button>
          <button 
            onClick={handleClear}
            className="rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
