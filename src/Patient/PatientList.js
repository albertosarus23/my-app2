import { Link } from 'react-router-dom';
import PatientDetails from './PatientDetails';

const PatientList = ({ patients }) => {
  return (
    <div className="patient-list">
      {patients.map(patient => (
        <div className="patient-preview" key={patient.id} >
          {/* <Link to={`/patient/${patient.id}`}> */}
            <h2>{ patient.patient_name }</h2>
            <p>Disease <b>{ patient.disease }</b></p>
            <p>Age <b>{patient.patient_age}</b></p>
          {/* </Link> */}
          {/* <PatientDetails id={id} /> */}
        </div>
      ))}
    </div>
  );
}
 
export default PatientList;