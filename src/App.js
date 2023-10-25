import './App.css';
import MyProvider from './MyProvider';
import MyComponent from './MyComponent';
import PersonalDetails from './PersonalDetails';
import EducationalDeatils from './Components/EducationalDeatils';
import WorkExperience from './Components/WorkExperience';
import FinalResume from './FinalResume';
import MyProvider2 from './MyProvider2';
import { Skills } from './Components/Skills';


function App() {
  return (
    <div>
      <MyProvider2>
      <EducationalDeatils />
      </MyProvider2>
      <MyProvider>
        <MyComponent />
     
        <WorkExperience />
        <Skills />
        <FinalResume />
   <PersonalDetails />
   <Skills />
      </MyProvider>
    
     
    </div>

  );
}

export default App;
