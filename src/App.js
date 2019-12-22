import React from 'react';

import Route from './router'

import Name from  './page/Name/Name'

function App() {
  const name = localStorage.getItem("name")

  if(name === null || name === "") return (
    <Name />
  );
  else return(
    <Route />
  );
}

export default App;
