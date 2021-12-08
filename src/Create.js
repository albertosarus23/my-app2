import { useState } from "react";
import { useHistory } from "react-router-dom"
import axios from "axios";
import qs from 'qs'

const Create = () => {
    const [b_drug_name, set_b_drug_name] = useState('');
    const [description, set_description] = useState('');
    const [abstract, set_abstract] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {b_drug_name, description, author};

        let headers= new Headers();
        headers.set('Content-Type','application/json');
        headers.set('Access-Control-Allow-Origin','*');

        // const url = "http://localhost:8080/Drug/insert_newDrug";
        // fetch(url,{
        //     method: "POST",
        //     headers:headers,
        //     body:JSON.stringify(blog.b_drug_name, 123),
        //     dataTyep: 'jsonp',
        //     mode:'no-cors'
        // }).then(() =>{
        //     history.push('/');
        //     })

        axios.post('http://localhost:8080/Drug/insert_newDrug',
            qs.stringify({
                drug_name: blog.b_drug_name,
                amount : 1
        })
        )
            .then(function (response) {
                console.log(response);
                if (response.data.code === 1) {
                    alert(response.data.data.dispaly_name);
                } else {
                    alert(response.data.msg);
                }
            })
            .catch(function (error) {
                console.log(error.message);
                if(error.response){
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }

    return ( 
        <div className = "create">
            <h2>Add a new drug</h2>
            <form onSubmit={handleSubmit}>
                <label>Drug name</label>
                <input 
                    type="text"
                    required
                    value={b_drug_name}
                    onChange={(e) => set_b_drug_name(e.target.value)}
                />
                <label>Drug abstract:</label>
                <textarea
                    required
                    value = {abstract}
                    onChange ={(e)=>set_abstract(e.target.value)}
                ></textarea>
                <label>Drug Description:</label>
                <textarea
                    required
                    value = {description}
                    onChange={(e) => set_description(e.target.value)}
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