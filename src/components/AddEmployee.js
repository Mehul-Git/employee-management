import React, { useContext } from 'react'
import employeContext from "../context/employee/employeContext";
const AddEmployee = () => {
    const context = useContext(employeContext)
    const {addemployee} = context;
    const handleclick = ()=>{

    }
  return (
    <div>
       <div className="contain">
      <div className="container">
      <h1> Add Employee</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          name='name'
          id="name"
          aria-describedby="emailHelp" onChange={onchange}
        />
        <label htmlFor="emailid" className="form-label">
          Email-ID
        </label>
        <input
          type="email"
          className="form-control"
          name='email'
          id="emailid"
          aria-describedby="emailHelp" onChange={onchange}
        />
        <label htmlFor="phoneno" className="form-label">
          Phone Number
        </label>
        <input
          type="number"
          className="form-control"
          id="phoneno"
          name='phoneno'
          aria-describedby="emailHelp" onChange={onchange}
        />
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="Adress"
          className="form-control"
          name='address'
          id="address" onChange={onchange}
        />
      </div>
      <button type="submit" className="btn btn-primary " onClick={handleclick}>
        Submit
      </button>
      </div>
      </div>
    </div>
  )
}

export default AddEmployee
