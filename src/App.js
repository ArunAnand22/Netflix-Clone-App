import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPoster from './Components/RowPoster/RowPoster';
import {orginals,action} from './Components/Url'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPoster url={orginals} title='Netflix Orginals'/>
     <RowPoster url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
