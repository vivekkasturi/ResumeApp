import EducationalDeatils from './Components/EducationalDeatils';
import WorkExperience from './Components/WorkExperience';
import FinalResume from './FinalResume';
import Personaldetails from './PersonalDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PersonalDetails2 from './PersonalDetails2';

import Pagination from './Components/NewComponent/Pagination';

import StartPage  from './StartPage';

function Main() {
  return (
    <div>  <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/personaldetails" element={<Personaldetails />} />
        <Route path="/educationdetails" element={<EducationalDeatils />} />
        <Route path="/workexperience" element={<WorkExperience />} />
        <Route path="/finalresume" element={<FinalResume />} />
        <Route path="/PersonalDetails2" element={<PersonalDetails2 />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>
    </Router>
    </div>

  );
}

export default Main;
