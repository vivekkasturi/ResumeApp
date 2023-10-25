import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../MyContext';

export default function WorkExperience() {


  const { workExperience, setWorkExperience } = useContext(MyContext);
  const [formData, setFormData] = useState({
    From: '',
    To: '',
    Company: '',
    Roles: '',
  });

  const handleInputChange=(e)=>{

const {name,value} = e.target
setFormData({...formData,[name]:value})
// setWorkExperience(...workExperience,formData);

  };
  
  const AddWorkExperience = () => {

   
  setWorkExperience([...workExperience,formData]);

  console.log(workExperience);
  setFormData({
    From: '',
    To: '',
    Company: '',
    Roles: '',
  });

  }

  const AddWorkExperiencedtls = () => {


    setWorkExperience((preValue) => [...workExperience, workExperience])

  }

  const deleteWorkExperience =(id)=>{

    const updatedWorkExperience= workExperience.filter((elements,index)=>{if(index!=id)
    return true})

    setWorkExperience(updatedWorkExperience);
  }
  return (
    <div>
      <h1>Resume C</h1>

      <h2> Please fill the WorkExperience Details Form </h2>

      {workExperience && workExperience.map((data, index) => {

        return (

          <>
            <ul key={index}>
              <input type="date" name="From" id="From" placeholder="From" value={data.From} onChange={handleInputChange}/>
              <input type="date" name="To" id="To" placeholder="To"  value={data.To} onChange={handleInputChange}/>
              <input type="text" name="Company" id="Company" placeholder="Company"value={data.Company} onChange={handleInputChange} />
              <input type="text" name="Roles" id="Roles" placeholder="Roles"value={data.Roles} onChange={handleInputChange}  />
              <button onClick={() => deleteWorkExperience(index)}>Delete</button>
             
            </ul>
          </>
        )
      })}

<input type="date" name="From" id="From" placeholder="From" value={formData.From} onChange={handleInputChange}/>
              <input type="date" name="To" id="To" placeholder="To"  value={formData.To} onChange={handleInputChange}/>
              <input type="text" name="Company" id="Company" placeholder="Company"value={formData.Company} onChange={handleInputChange} />
              <input type="text" name="Roles" id="Roles" placeholder="Roles"value={formData.Roles} onChange={handleInputChange}  />
<button onClick={AddWorkExperience}>Add </button>
      <button onClick={AddWorkExperiencedtls}>Add more WorkExperience</button>

      <Link to="/educationdetails"><button type="submit"  >
        Back
      </button></Link>
      <Link to="/skills"><button type="submit"  >
        Next
      </button></Link>

    </div>

  );
}
