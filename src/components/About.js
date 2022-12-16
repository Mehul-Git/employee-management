import React, {useContext} from 'react';
import employeContext from '../context/employee/employeContext';

const About = () => {
  const a = useContext(employeContext)
  return (
    <div>
      this is about {a.name} and he is in class {a.class}
    </div>
  )
}

export default About
