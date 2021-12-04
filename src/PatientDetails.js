import { useHistory, useParams} from "react-router-dom";
import useFetch from "./usefetch";
import {Link} from "react-router-dom";

const PatientDetails =({id}) =>{
    const{data: patient,error,isPending} = useFetch('http://localhost:8001/patients/' + id);
    const history = useHistory();

    const handleClick = () =>{
        fetch('http://localhost:8001/patients/' +patient.id, {
            method:'DELETE'
        }).then(() =>{
            history.push('/patientlist');
        })
    }


    return (
        <div className="patient-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {patient &&(
                <article>
                    <p>{patient}</p>
                    <h2>{patient.name}</h2>
                    <p>Prescribed by {patient.doctor}</p>
                    <div>{patient.room}</div>
                    <div className="Delete_Button">
                        <button onClick={handleClick}>delete</button>
                    </div>
                    <div className ="Go_Back">
                        <Link to='/patientlist'>
                            <button>back</button>
                            </Link>
                    </div>
                </article>
            )
            }
        </div>
    );
}

export default PatientDetails;