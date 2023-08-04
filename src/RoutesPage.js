import Personaldetails from "./PersonalDetails";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const RoutesPage = () => {


    return (<div>
        <h2>Routes page</h2>
        <Router>
      <Switch>
    
        <Route path="/about" component={Personaldetails} />
  
        {/* Add the following route for any child path */}

      </Switch>
    </Router>
        </div>);
  };
  
  export default RoutesPage;
  