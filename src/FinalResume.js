import { useContext } from "react";
import MyContext from "./MyContext";

import { saveAs } from 'file-saver';
import { Link } from "react-router-dom";


const FinalResume = () => {

  const { skills, aboutMe, textValueWe, formdataobj, educationalDetaialobj, hobbies, followMe, workExperience, setWorkExperience } = useContext(MyContext);

  const download = () => {
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: "text/html" });

    saveAs(blob, 'current_page.html');
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

                <p><ul>{skills.map((skill, index) => {

                  return (

                    <>
                      <li key={index}>{skill.name}-{skill.rating}</li>
                    </>



                  )

                })}</ul></p>


              </div>


              <hr />
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
            <hr />

            <div className="Work_Experience">
              <h2>Work Experience</h2>
              {workExperience.map((data, index) => {

console.log(data);
                return (
                  <>
                    <div key={index}>
                    <span>Company:</span><h3>{data.Company}</h3>
                      <p><strong>Form:</strong>{data.From}-<strong>To:</strong>{data.To}</p>
                      <p><strong>Roles and Responsibilities:</strong>
                        {data.Roles}</p>
                    </div>
                  </>
                )
              })}

            </div>


            <hr />
            <div className="Education_details">
              <h2>Education details</h2>
              <ul>
                <li>
                  {educationalDetaialobj.HigherDegree1} completed in {educationalDetaialobj.College_name} during the period {educationalDetaialobj.From}-{educationalDetaialobj.To}
                </li>
              </ul>

            </div>
            <hr />
            <div className="Hobbies">
              <h2>Hobbies</h2>

              <ul>

                {hobbies.map((hobbie, index) => {

                  return (<div key={index}>
                    <li>{hobbie}</li>
                  </div>)
                })}

              </ul>
            </div>
          </div>

        </div>
      </div>
      <button onClick={download}>Download</button>
      <Link to="/personaldetails2"> <button>Back</button></Link>

    </div>);
};

export default FinalResume;
