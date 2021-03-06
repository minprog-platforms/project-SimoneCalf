import React, { useState } from 'react';
import './index.css';
import AddedAndConsumed, {SelectFood, SaltandFatAmount} from './toevoegen';


function App() {
  const [info, setInfo] = useState(JSON.parse(localStorage.getItem("info")))
  const [consumed, setConsumed] = useState(JSON.parse(localStorage.getItem("consumed")))

  return (
    <div className="App">
      <>
        <div className='everything'>
          <h1 className="title">Voeding & Hart</h1>
          <h3 className="info-algemeen">
            Met deze applicatie kunt u bijhouden hoeveel zout en verzadigd vet u op een dag binnenkrijgt. 
            Het bijhouden hiervan is in het bijzonder belangrijk voor hartpatienten. Zout eten kan de bloeddruk verhogen en het eten van verzadigd vet het cholesterolgehalte.
            Een hoge bloeddruk verhoogt de kans op een hartinfarct of beroerte en een hoog cholesterolgehalte de kans op hart- en vaatziekten.
          </h3>
          <h3 className="advies">
            Het advies is om niet meer dan 6 gram zout per dag te eten en niet meer dan 10% van je dagelijkse energie uit verzadigd vet te halen.
            Voor een man betreft de hoeveelheid verzadigd vet gemiddeld 25 gram en voor een vrouw 20 gram.
          </h3>
          <div className='first-form'>
            <AddedAndConsumed setInfo={setInfo}/>
          </div>
          <div className='second-form'>
            <SelectFood info={info} setConsumed={setConsumed}/>
          </div>
          <div className='consumed'>
            <SaltandFatAmount info={info} consumed={consumed}/>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
