import React from 'react';
import './App.css';
import { Samp } from './features/samp/Samp';
import AddStudent from './features/samp/AddStud';


function App() {
  return (
    <div className="App">
      
        <AddStudent></AddStudent>
        <Samp></Samp>
        
  
    </div>
  );
}

export default App;