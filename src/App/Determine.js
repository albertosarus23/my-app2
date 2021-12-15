import Doctor from "./Doctor";
import Patient from "./Patient";
import LoginForm from "../LoginForm"

const Determine = ({loginstatus}) =>{
    return(
        <div className="pagedirection">
            {loginstatus}
        </div>
        
    );
}

export default Determine;