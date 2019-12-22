import React from  'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// import pages 
import Home from './page/Home/Home'


export default function src(){
  return(
    <BrowserRouter>
      <Switch>
        <Route  path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
} 