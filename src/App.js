import './App.css';
import {useState} from "react";
import Axios from "axios"

function App() {

    const [age, setAge] = useState(null)
    const [name, setName] = useState("")

    const fetchAge = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setAge(res.data)
        })
    }


  return (
    <div className="App">
        <input onChange={(e) => {setName(e.target.value)}} type="text"/>
        <button onClick={fetchAge} >Get age</button>
        <p>{age?.age}</p>
    </div>
  );
}


export default App;
