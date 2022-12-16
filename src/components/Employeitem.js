import React from 'react'

const Employeitem = (props) => {
    const {employee} = props;
  return (
    
        <div className="row my-3">
       <div className="row-md-3">
       <div className="card">
  <div className="card-body">
    <h5 className="card-title">Name: {employee.name}</h5>
    <p className="card-text">Address:{employee.address}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Phone:{employee.phoneno}</li>
    <li className="list-group-item">Email:{employee.email}</li>
  </ul>
  <div className="card-body">
    <div className="mx-1">
  <i className="fa-solid fa-pen-to-square"></i>
  
    <i className="fa-solid fa-trash mx-4"></i>
    </div>
  </div>
</div>
    </div>
    </div>

  )
}

export default Employeitem
