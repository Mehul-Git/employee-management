import React, { useContext } from 'react';
import employeContext from "../context/employee/employeContext";
import AddEmployee from './AddEmployee';
import Employeitem from './Employeitem.js';

const Employee = () => {
    const context = useContext(employeContext);
    const {employees , addemployee} = context;
  return (
    <>
    <AddEmployee/>
    <div className='row my-3'>
        <h2>
            Employees 
            </h2>
            {employees.map((employee)=>{
                return <Employeitem key = {employee._id} employee = {employee}/>;
            })}
    </div>
    </>
  )
}

export default Employee
