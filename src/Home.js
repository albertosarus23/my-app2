//import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";
import { Link } from "react-router-dom";
import Pictures from "./Pictures";

const Home = () => {
  const {error, isPending, data:blogs} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {/* { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> } */}
      <Pictures/>
      <div className = "Links">
        <div className = "Medical_Storage">
          <Link to="/bloglist">
            <h1> Medical Storage </h1>
            <p>Go check the medical items we have</p>
          </Link>
        </div>
        <div className = "Patient_Queue">
          <Link to="/queue">
            <h1> Patient Queue </h1>
            <p>Go check the current queue</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
 
export default Home;
