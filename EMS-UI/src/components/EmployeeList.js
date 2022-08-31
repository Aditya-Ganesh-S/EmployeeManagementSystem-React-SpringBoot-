import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployee] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmplpyees();
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
      if (employees) {
        setEmployee((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  return (
    <div className="container my-8 mx-auto">
      <div className="h-12 px-8">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-slate-600 text-white px-4 py-2"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="font-medium text-gray-500 uppercase tracking-wider">
                First Name
              </th>
              <th className="font-medium text-gray-500 uppercase tracking-wider">
                Last Name
              </th>
              <th className="font-medium text-gray-500 uppercase tracking-wider">
                Email Id
              </th>
              <th className="text-right px-10 py-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                <Employee
                  key={employee.id}
                  deleteEmployee={deleteEmployee}
                  employee={employee}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
