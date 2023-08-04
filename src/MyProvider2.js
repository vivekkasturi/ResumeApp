// MyProvider2.js
import React,{useState}from 'react';
import MyContext from './MyContext';

const MyProvider2 = ({children}) => {

const [educationalDeatialobj,setEducationalDeatialobj]= useState({HigherDegree1:"",HigherDegree2:"",Marks1:"",Marks2:""});


  const educationalDeatialfn = (name,value)=>{
    console.log(name,value);
    setEducationalDeatialobj({...educationalDeatialobj,[name]:value})
  }
  return (
    <MyContext.Provider value={{educationalDeatialfn,educationalDeatialobj}} >
 {children}
    </MyContext.Provider>
  );
};

export default MyProvider2;


