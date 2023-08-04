import { useContext } from "react";

import MyContext from "./MyContext";


import {Link} from 'react-router-dom';

export default function PersonalDetails2() {
  const {hobbies,setHobbies,aboutMe,setAboutMe,setFollowMe} = useContext(MyContext);
  

   const handlechange = (e)=>{
 setHobbies(...hobbies,e.target.value)
 console.log(hobbies)
 };


  return (
  
      <div className="PersonalDetailsForm">
        <h2>Resume D</h2>
        <h2> Please fill the Personal Details Form </h2>
        <input
          type="text"
          placeholder="Hobbies"
          name="Hobbies"
          onChange={handlechange}
        />
        <br />
        <textarea name="aboutMe"  placeholder="AboutMe" onChange={(e)=>setAboutMe(e.target.value)} /><br  />

        <input style={{display:"inline-block"}} name="Follow_Me" placeholder="Follow_Me" onChange={(e)=>setFollowMe(e.target.value)}/><br />
        <Link to="/workexperience"><button type="submit"  >
            Back
          </button></Link>
        <Link to="/finalresume"><button type="submit"  >
            Next
          </button></Link>
      
        
      </div>

     
   
  );
}

