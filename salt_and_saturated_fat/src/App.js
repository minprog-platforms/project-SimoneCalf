import React from 'react';
import './index.css';
import Toevoegen from './toevoegen';
//import BarChart from './BarChart';
//import Grafiek from './Grafiek2.0';
import ZoutGrafiek from './Zout';
import VetGrafiek from './Vet';
// import zoutGrafiek from './zoutgrafiek';
// import GrafiekOrigineel from './Grafiek';


function App() {

  return (
    <div className="App">
      <>
        <h1>setrfguhkj</h1>
        <Toevoegen />
        {/*<BarChart />
        <Grafiek  />
        {/* <zoutGrafiek />
        <GrafiekOrigineel /> */}
        <ZoutGrafiek />
        <VetGrafiek />
      </>
    </div>
  );
}

export default App;
