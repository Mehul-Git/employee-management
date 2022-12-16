import React, { useContext } from "react";

import Employee from "./Employee";

const Home = () => {
  return (
    <div>
      <div className="contain">
      <div className="container">
      <h1> Add Employee</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="name"
          className="form-control"
          id="exampleInputEmail12"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email-ID
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Phone Number
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputEmail123"
          aria-describedby="emailHelp"
        />
        <label htmlFor="exampleInputPassword1" className="form-label">
          Address
        </label>
        <input
          type="Adress"
          className="form-control"
          id="exampleInputPassword1234"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <Employee/>
      </div>
      </div>
    </div>
  );
};

export default Home;
