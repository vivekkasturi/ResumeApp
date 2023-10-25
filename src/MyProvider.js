// MyProvider.js
import React,{useState}from 'react';
import MyContext from './MyContext';

const MyProvider = ({children}) => {
const [formdataobj,setFormdataobj]= useState({FirstName:"",LastName:"",Number:"",Gender:"",Mail:""});
const [educationalDetaialobj,setEducationalDetaialobj]= useState({HigherDegree1:"",HigherDegree2:"",Marks1:"",Marks2:"",From:"",To:"",College_name:""});

const [hobbies,setHobbies]= useState([]);

const [aboutMe, setAboutMe]= useState("");

const [skills,setSkills]= useState([{name:"", rating:null}]);
const [followMe,setFollowMe] = useState("");

const [textValueWe,setTextValueWe] = useState([]);

const [inputBoxq,setInputBoxq]= useState([]);

const[skillRating,setSkillRating] = useState(null);


const[workExperience,setWorkExperience] = useState([])
  const educationalDetaialfn = (name,value)=>{
    console.log(name,value);
  }
  const value = {
    inputBoxq,setInputBoxq,skills,setSkills,followMe,setFollowMe,aboutMe,setAboutMe,textValueWe,setTextValueWe,formdataobj,setFormdataobj,educationalDetaialfn,educationalDetaialobj,setEducationalDetaialobj,hobbies,setHobbies,skillRating,setSkillRating,workExperience,setWorkExperience
  }
  return (
    <MyContext.Provider value={value} >
 {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
