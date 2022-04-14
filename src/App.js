import React from 'react';
import Home from './components/Home';
import MUIDrawer from './components/MUIDrawer';

function App() {
  
  
  return (
  <MUIDrawer title="Home" content={<Home/>}/>
  );
}

export default App;
