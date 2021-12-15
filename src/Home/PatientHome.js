// rendering of Patient Home
//import { useEffect, useState } from "react";
import BlogList from "../Blogs/BlogList";
import useFetch from "../usefetch";
import { Link } from "react-router-dom";
import Pictures from "./Pictures";

const PatientHome = () => {
  const {error, isPending, data:blogs} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      <Pictures/>
        <div className = "Patient_Queue">
          <Link to="/queue">
            <h1> Patient Queue </h1>
            <p>Go check the current queue</p>
          </Link>
        </div>
    </div>
  );
}
 
export default PatientHome;
