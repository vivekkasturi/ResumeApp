import { useContext } from "react";
import MyContext  from "./MyContext";

import {saveAs} from 'file-saver';


const FinalResume = () => {

  const {skills,aboutMe,textValueWe,formdataobj,educationalDetaialobj,hobbies,followMe} = useContext(MyContext);

for(let name in skills){
 console.log(name);
}
  const download =()=>{
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent],{type:"text/html"});

    saveAs(blob,'current_page.html');
  };
  
  return (
  
  <div>

  
<div className="resume">
<div className="resume_left">
  <div className="resume_left_personaldeatils">
  <p>
   
  <span>{formdataobj.FirstName}</span><br />
  <span>Design Engineer</span><br />
  <span><i className="fas fa-phone"></i>{formdataobj.Number}</span><br />
  <span><i className="fas fa-envelope"></i>{formdataobj.Mail}</span><br />
  </p>

  
  <hr />
  <div className="skills">

 
  <h3>SKILL'S</h3><br />
  <div className="skills_bar">
{/*   
  <span  style={{width: "80%"}}>HTML <strong>80%</strong></span><br />
  <span style={{width: "70%"}}>CSS <strong>70%</strong></span><br />
  <span style={{width: "70%"}}>CSS <strong>70%</strong></span><br />
  <span style={{width: "90%"}}>React <strong>90%</strong></span><br /> */}

<ul>{skills.map((skill,index)=>{

return(  
 <> <li key={index} style={{width: `${skill.skilllevel}%`,color:"black"}}>{skill.skillname}</li>
 </>
     
       
 
    )
   
  })}</ul>
  

  </div>
 

 <hr  />
 <div className="social">
<h3>Follow me</h3>

{/* <span><i className="fab fa-linkedin">  </i>{followMe}sdc</span> */}
<i className="fab fa-linkedin">   </i><strong>  {followMe}</strong> 

 </div>

  </div>
  </div>
  </div>
  <div className="resume_right">
  <div className="About_me">
  <h2>About Me</h2>
    <p>
   {aboutMe}
    </p>
    <hr  />
    <div className="Work_Experience">
    <h2>Work Experience</h2>
    <h3>L&T</h3>
    <h4>Period:2021-present</h4>
    <h5>Roles and Responsibilities</h5>
 {textValueWe}

 {/* <ul>
  <li> </li>
  
 </ul> */}
    </div>
    <hr  />
    <div className="Education_details">
    <h2>Education details</h2>
    <ul>
      <li>
      {educationalDetaialobj.HigherDegree1} completed in {educationalDetaialobj.College_name} during the period {educationalDetaialobj.From}-{educationalDetaialobj.To}
      </li>
    </ul>
    
    </div>
    <hr  />
    <div className="Hobbies">
    <h2>Hobbies</h2>
    
    <ul>

      {hobbies.map((hobbie,index)=>{
        <div key={index}>
          <li>{hobbie}</li>
        </div>
      })}
    
    </ul>
    </div>
  </div>
 
  </div>
</div>
   <button onClick={download}>Download</button>
   <button>Back</button>
   </div>);
};

export default FinalResume;

