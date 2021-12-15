//import { useEffect, useState } from "react";
import PatientList from "./PatientList";
import useFetch from "../usefetch";
import { Link } from "react-router-dom";

const PatientQueue = () => {
  const {error, isPending, data:patients} = useFetch('http://localhost:8080/Patient/getAllPatients');

  return (
    <div className="Patients">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { patients && <PatientList patients={patients} /> }
      {/* <div className="add_drug">
        <Link to="/create">Add drug</Link>
      </div> */}
    </div>
  );
}
 
export default PatientQueue;
