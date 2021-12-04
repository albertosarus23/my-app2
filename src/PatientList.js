import { Link } from 'react-router-dom';
import PatientDetails from './PatientDetails';

const PatientList = ({ patients }) => {
  return (
    <div className="patient-list">
      {patients.map(patient => (
        <div className="patient-preview" key={patient.id} >
          {/* <Link to={`/patient/${patient.id}`}> */}
            <h2>{ patient.name }</h2>
            <p>Please go to see <b>{ patient.doctor }</b></p>
            <p>At room <b>{patient.room}</b></p>
          {/* </Link> */}
          {/* <PatientDetails id={id} /> */}
        </div>
      ))}
    </div>
  );
}
 
export default PatientList;