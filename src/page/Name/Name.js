import React, {useState} from 'react'

import "./Name.css"


export default function Name({history}){
  const [name, setname] = useState(localStorage.getItem("name"))
  function newname(){
    localStorage.setItem("name", name.substring(0,1).toUpperCase().concat(name.substring(1)))

    history.push('/')

  }
  
  if(name === null || name === "") return (
    <div id="Name_page">
      <div className="init_Name_message">
        <span>Your name: </span>
       <form onSubmit={newname}>
        <input type="text" className="input_name"  spellcheck="false"
         onChange={event => setname(event.target.value)}
         value={name} 
         />
          <button className="button_invisible" type="submit"></button>
       </form> 
       <span>!!</span>
      </div>
    </div>
  );
    
    
   else return( 
    <div id="Name_page">
      <div className="init_Name_message">
        <span>Hello </span>
       <form onSubmit={newname}>
        <input type="text" className="input_name" maxLength="10"  spellcheck="false"
         onChange={event => setname(event.target.value)}
         value={name} 
         />
          <button className="button_invisible" type="submit"></button>
       </form> 
       <span>!!</span>
      </div>
    </div>
  );
  
}