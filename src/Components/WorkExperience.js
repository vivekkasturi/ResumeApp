import { useContext } from 'react';
import {Link} from 'react-router-dom';
import MyContext from '../MyContext';

export default function WorkExperience() {

  const {inputBoxq,setInputBoxq,skills,setSkills,textValueWe,setTextValueWe} = useContext(MyContext);



  const textdata = (e)=>{

  console.log(e.target.value);
let textvalue="";
const bullet ="\u2022";

  let textlength=e.target.value.length;
  if(textlength>0){
    textvalue= bullet+e.target.value;
  }

setTextValueWe([...textValueWe,textvalue]); 
  };

  const skillsdata=(e)=>{
  
   let skillsarray=e.target.value;
 
   const{ name,value} = e.target;

   setSkills([...skills,{...skills,[name]:value}])

   console.log(skills);
   
  };

  const addskills=()=>{

  

        setInputBoxq((preValue)=>[...inputBoxq,<input type="text" name="skillname" onChange={skillsdata}  placeholder='Enter data' autoFocus />,<input type="number"onChange={skillsdata}  name="skilllevel" />]);
      }
    
        return (
      <div>
        <h1>Resume C</h1>
  
        <h2> Please fill the WorkExperience Details Form </h2>
        <div className="WorkExperienceForm">
        <input type="text" placeholder="Empolyee 1 Name" />
        <label>From</label>
        <input type="date" placeholder="Year of working" />
        <label>To</label>
        <input type="date" placeholder="Year of working" /><br  />
        <textarea name="roles_responsibilities" placeholder='roles and responsibilities' onChange={textdata}/><br />
        <input type="text" placeholder="Empolyee 2 Name" />
        <label>From</label>
        <input type="date" placeholder="Year of working" />
        <label>To</label>
        <input type="date" placeholder="Year of working" /><br  />
        <textarea name="roles_responsibilities" placeholder='roles and responsibilities' onChange={textdata}/><br />
        <input type="text" name="skillname"placeholder="Please add skills bycomma"/>
        <input type="text" name="skilllevel" /><br />
        {inputBoxq}
        <button onClick={addskills}>To Add more skills deatils  </button>
    
        <Link to="/educationdetails"><button type="submit"  >
            Back
          </button></Link>
          <Link to="/personaldetails2"><button type="submit"  >
            Next
          </button></Link>
             
         
        </div>
      </div>
    );
  }
  