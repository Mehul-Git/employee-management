import { useState } from "react";
import EmployeContext from "./employeContext";


const EmployeState = ({children})=>{
  const employeeinitial =
    [
      {
        "_id": "639beb4a020928d6e5e63876",
        "user": "639b845390badc24f039eb80",
        "name": "keshajv",
        "email": "mehult54@gmail.com",
        "phoneno": 8065430987,
        "address": "teuhnyebhnsbhdns",
        "__v": 0
      },
      {
        "_id": "639beb4a020928d6e5e63866",
        "user": "639b845390badc24f039eb80",
        "name": "keshajv",
        "email": "mehult54@gmail.com",
        "phoneno": 8065430987,
        "address": "teuhnyebhnsbhdns",
        "__v": 0
      },
      {
        "_id": "639beb4a020928d6e5e63856",
        "user": "639b845390badc24f039eb80",
        "name": "keshajv",
        "email": "mehult54@gmail.com",
        "phoneno": 8065430987,
        "address": "teuhnyebhnsbhdns",
        "__v": 0
      }
    ]

const [employees , setemployees] = useState(employeeinitial)


  return (
    <EmployeContext.Provider  value={{employees , setemployees}}>
        {children}
    </EmployeContext.Provider>
    )
}


export default EmployeState;