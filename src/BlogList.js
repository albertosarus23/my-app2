import { Link } from 'react-router-dom';

const BlogList = ({ drug}) => {
  return (
    <div className="drug-list">

      { console.log(drug)}
      {  drug.map(drug => (
        <div className="blog-preview" key={drug.id} >
          <Link to={`/drug/${drug.id}`}>
            <h2>{ drug.drug_name }</h2>
            <p>Produced by { drug.drug_producer }</p>
            <p> Remaining Amount {drug.stock}</p>
          </Link>

        </div>
      ))}
    </div>
  );
}
 
export default BlogList;