import './App.css';
import {useState} from "react";
import Axios from "axios"

function App() {

    const [excuse, setExcuse] = useState("")


    const fetchExcuse = (reason) => {
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${reason}`)
            .then((res) => {
                setExcuse(res.data[0].excuse)
            }
    )}

  return (
    <div className="App">
        <h1>Generate an Excuse</h1>
        <button onClick={() => {fetchExcuse("party")}}>Party</button>
        <button onClick={() => {fetchExcuse("family")}}>Family</button>
        <button onClick={() => {fetchExcuse("office")}}>Office</button>
        <p>{excuse}</p>
    </div>
  );
}


export default App;
