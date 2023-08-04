// MyComponent.js
import React,{useContext} from 'react';
import MyContext from './MyContext'
import EducationalDeatils from './Components/EducationalDeatils';



const MyComponent = () => {
  // const [Personaldeatils1, formData1] = useContext(MyContext);
  const { formdataobj } = useContext(MyContext);

  

  return (
    // <MyContext.Consumer>
    <div>
      {formdataobj.FirstName}
      {formdataobj.LastName}
      {formdataobj.Number}
      {formdataobj.Gender}
     
      </div>


    // </MyContext.Consumer>
  );
};

export default MyComponent;
