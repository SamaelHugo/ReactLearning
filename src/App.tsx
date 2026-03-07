import React from 'react';
import './App.css';
import {Person, Country} from "./person";

function App() {

    // const getAge = (name: string) : number => {
    //     return 99
    // } // Типизация в функции

  return (
    <div className="App">
        <Person
            name="Pedro"
            email="wefwfe@gmail.com"
            age={21}
            isMarried={true}
            friends={["jake", "lis"]}
            country={Country.Brazil}
        />
    </div>
  );
}

export default App;
