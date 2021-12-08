import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
    const [drug_name, set_drug_name] = useState('');
    const [amount, set_amount] = useState('');
    const [author, setAuthor] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {drug_name, amount, author};

        let headers= new Headers();
        headers.set('Content-Type','application/json');
        headers.set('Access-Control-Allow-Origin','*');

        const url = "http://localhost:8080/Drug/insert_newDrug";
        fetch(url,{
            method: "POST",
            headers:headers,
            body:JSON.stringify(drug_name, amount),
            dataTyep: 'jsonp'
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
                    value={drug_name}
                    onChange={(e) => set_drug_name(e.target.value)}
                />
                <label>Drug abstract:</label>
                <textarea
                    required
                    value = {amount}
                    onChange ={(e)=>set_amount(e.target.value)}
                ></textarea>
                <label>Drug Description:</label>
                <textarea
                    required
                    value={amount}
                    onChange={(e) => set_amount(e.target.value)}
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