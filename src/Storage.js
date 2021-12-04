//import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";
import { Link } from "react-router-dom";

const Storage = () => {
  const {error, isPending, data:blogs} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="storage">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
      <div className="add_drug">
        <Link to="/create">Add drug</Link>
      </div>
    </div>
  );
}
 
export default Storage;
