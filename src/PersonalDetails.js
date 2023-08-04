import { useContext } from "react";

import MyContext from "./MyContext";


import {Link} from 'react-router-dom';

export default function PersonalDetails() {
  const {formdataobj,setFormdataobj} = useContext(MyContext);
  

   const handlechange = (e)=>{
    const {name,value} = e.target;
 
   setFormdataobj({...formdataobj,[name]:value});

   console.log(formdataobj);
 };


  return (
  
      <div className="PersonalDetailsForm">
        <h2>Resume A</h2>
        <h2> Please fill the Personal Details Form </h2>
        <input
          type="text"
          placeholder="FirstName"
          name="FirstName"
          value={formdataobj.FirstName}
          onChange={handlechange}
        />
        <br />
        <input
          type="text"
          placeholder="LastName"
          name="LastName"
          value={formdataobj.LastName}
          onChange={handlechange}
        />
        <br />
        <input
          type="number"
          name="Number"
          placeholder="Mobile No.:"
          value={formdataobj.Number}
          onChange={handlechange}
        />
        <br />
        <input
          type="text"
          name="Gender"
          placeholder="Gender"
          value={formdataobj.Gender}
          onChange={handlechange}
        />
        <br />
        
        <input type="text" name="Mail" placeholder="Enter mail address" value={formdataobj.Mail} onChange={handlechange}/>
        <br  />
          <Link to="/"><button type="submit"  >
            back
          </button></Link>
          <Link to="/educationdetails"><button type="submit"  >
            Next
          </button></Link>
      </div>

     
   
  );
}

