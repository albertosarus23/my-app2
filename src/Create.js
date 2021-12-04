import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        fetch('http://localhost:8000/blogs/',{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(() =>{
            history.push('/');
            })
    }

    return ( 
        <div className = "create">
            <h2>Add a new drug</h2>
            <form onSubmit={handleSubmit}>
                <label>Drug name</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Drug abstract:</label>
                <textarea
                    required
                    value = {body}
                    onChange ={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Drug Description:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <label>Prescribed doctor:</label>
                    <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                    <option value="Doctor Huang">Dr Kristophe Zhang</option>
                    <option value="Doctor Yang">Dr Yoshi Yohohama</option>
                    </select>
                    <button>Add Drug</button>
                </form>
                </div>
            );
            }
 
export default Create;