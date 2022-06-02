import React, { useState } from 'react';
import './index.css';
import AddedAndConsumed, {SelectFood, SaltandFatAmount} from './toevoegen';
import ZoutGrafiek from './Zout';



function App() {
  const [info, setInfo] = useState(JSON.parse(localStorage.getItem("info")))
  const [consumed, setConsumed] = useState(JSON.parse(localStorage.getItem("consumed")))

  return (
    <div className="App">
      <>
        <AddedAndConsumed setInfo={setInfo}/>
        <SelectFood info={info} setConsumed={setConsumed}/>
        <SaltandFatAmount info={info} consumed={consumed}/>
        <ZoutGrafiek />
      </>
    </div>
  );
}

export default App;
