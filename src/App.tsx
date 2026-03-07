import React from 'react';
import './App.css';
import {Person} from "./person";

function App() {
  return (
    <div className="App">
        <Person
            name="Pedro"
            email="wefwfe@gmail.com"
            age={21}
            isMarried={true}
            friends={["jake", "lis"]}
        />
    </div>
  );
}

export default App;
