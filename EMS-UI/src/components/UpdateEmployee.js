import React from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import {useNavigate} from 'react-router-dom'

const UpdateEmployee = () => {
  const {id} = useParams();
    const navigate = useNavigate();
  const [employee, setEmployee] = React.useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id)
     .then(res => {
        navigate("/employeeList");
     })
     .catch(err => {
        console.log(err);
     })
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({
      ...employee,
      [e.target.name]: value,
    });
  };

  React.useEffect(() => {
   const fetchData = async () => {
    try{
        const res = await EmployeeService.getEmployeeById(id);
        setEmployee(res.data);
    }
    catch(error){
        console.log(error);
    }
   }
   fetchData();
  }, [])
  

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Employee</h1>
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
            onClick={handleUpdate}
            className="rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700"
          >
            Update
          </button>
          <button 
            onClick={()=> navigate("/employeeList")}
            className="rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
