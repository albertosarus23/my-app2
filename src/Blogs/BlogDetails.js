import { useHistory, useParams} from "react-router-dom";
import useFetch from "../usefetch";
import {Link} from "react-router-dom";

const BlogDetails =() =>{
    const {id} = useParams();
    const{data: blog,error,isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' +blog.id, {
            method:'DELETE'
        }).then(() =>{
            history.push('/bloglist');
        })
    }

    const handleClick1 = () =>{
        <link rel="stylesheet" href='/storage'/>
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>Prescribed by {blog.author}</p>
                    <div>{blog.body}</div>
                    <div className="Delete_Button">
                        <button onClick={handleClick}>delete</button>
                    </div>
                    <div className ="Go_Back">
                        <Link to='/bloglist'>
                            <button>back</button>
                            </Link>
                    </div>
                </article>
            )
            }
        </div>
    );
}

export default BlogDetails;