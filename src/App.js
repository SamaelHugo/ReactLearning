import './App.css';
import {useCount} from "./useCount";


function App() {

    const {count, increase, decrease, restart} = useCount();

  return (
      <div className="App">
          {count}
          <button onClick={increase} >Increase</button>
          <button onClick={decrease} >Decrease</button>
          <button onClick={restart} >Restart</button>
      </div>
  )
}


export default App;
