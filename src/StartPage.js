import { Link } from "react-router-dom";

export default function StartPage(){


    return (

        <div className="startPage">
        <h1>Welcome !</h1>
        <p>

            Here is the application for you to create simple and beautiful resume. <br />
            Please click below button to start with it!!!!
        </p>
    <Link to="/personaldetails"> <button>Start</button></Link>
       
        </div>
    )
}