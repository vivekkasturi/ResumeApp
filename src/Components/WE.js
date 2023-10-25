import { useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../MyContext';

export default function WorkExperience() {

   const [skillLevel,setSkillLevel]= useState(0);

    return (
        <div>
            <h1>Resume C-1</h1>

            <h2> Please fill the WorkExperience Details Form </h2>
            <div className="WorkExperienceForm">
                <input type="text" placeholder="Empolyee  Name" />
                <label>From</label>
                <input type="date" placeholder="Year of working" />
                <label>To</label>
                <input type="date" placeholder="Year of working" /><br />
                <textarea name="roles_responsibilities" placeholder='roles and responsibilities' /><br />
                
                <input type="text" name="skillname" placeholder="Please add skills bycomma" />
                <input type="range" max="5" min="0" onChange={(e)=>{console.log(e.target.value);setSkillLevel(e.target.value)}}name="skilllevel" /><span className='hidderdisplay' >i
                   <p className='additional'>Rate your self on the scale of 5.
                   Note: 5 is Excellent 1 is poor</p></span><br />

                <button> Click here to add previous Employee details  </button>
                <button > Click here to add Skills details  </button><br />

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
