import React from "react";
import {useNavigate} from "react-router-dom"

const Employee = (props) => {
    const navigate = useNavigate();
    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    }

  return (
    <tr>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{props.employee.firstName}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{props.employee.lastName}</div>
      </td>
      <td className="text-center px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{props.employee.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a 
          onClick = {(e, id)=> editEmployee(e, props.employee.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer ">
          Edit
        </a>
        <a 
            onClick={(e, id) => props.deleteEmployee(e, props.employee.id)}
            className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer  ">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
