//import { useEffect, useState } from "react";
import BlogList from "../Blogs/BlogList";
import useFetch from "../usefetch";
import { Link } from "react-router-dom";

const Storage = () => {
  const {error, isPending, data:drug} = useFetch('http://localhost:8080/Drug/getAllDrugs');

  return (
    <div className="storage">
      { error && <div>{ error }</div> }
      { isPending && <div>LoadingStorage...</div> }
      { drug && <BlogList drug={drug} /> }
      <div className="add_drug">
        <Link to="/create">Add drug</Link>
      </div>
    </div>
  );
}
 
export default Storage;
