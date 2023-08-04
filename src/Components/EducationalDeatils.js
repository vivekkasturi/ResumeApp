import { useContext } from "react";

import MyContext  from "../MyContext";

import {Link } from 'react-router-dom';

export default function EducationalDeatils() {


const { educationalDetaialobj,setEducationalDetaialobj } = useContext(MyContext); // Fix the variable name here
const changedata=(e)=>{
const {name,value} = e.target;
setEducationalDetaialobj({...educationalDetaialobj,[name]:value})
}
  return (
    <div>
      <h1>Resume B</h1>

      <h2> Please fill the Educational Details Form </h2>
      <div className="EducationalDetailsForm">
        <input type="text" name="HigherDegree1" placeholder="Higher Degree1" value={educationalDetaialobj.HigherDegree1} onChange={changedata}/><br   />
        <input type="numbers"name="Marks1" placeholder="Marks1"  value={educationalDetaialobj.Marks1} onChange={changedata}/><br />
        <label>From</label><input type="date" name="From" onChange={changedata}/> <label>To</label><input type="date" name="To" onChange={changedata} />
        <input type="text" name="College_name" placeholder="College/University"  value={educationalDetaialobj.College_name} onChange={changedata}/> <br />
        <Link to="/personaldetails"><button type="submit"  >
            Back
          </button></Link>
         
          <Link to="/workexperience"><button type="submit"  >
            Next
          </button></Link>
          
       
      </div>
    </div>
  );
}
