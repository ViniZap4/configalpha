import React, { useState } from 'react'

import './AlphaLogo.css'


//import icons
import alphaA0 from '../../media/imagens/icon/alpha/alphaA0.png'
import alphaA1 from '../../media/imagens/icon/alpha/alphaA1.png'
import alphaA2 from '../../media/imagens/icon/alpha/alphaA2.png'
import alphaA4 from '../../media/imagens/icon/alpha/alphaA4.png'



export default function AlphaLogo(){
  const [ imglogo, setimglogo] = useState()
  const Temelogo = localStorage.getItem("logo")

  setInterval(() => {
    if(Temelogo === "portrait"){setimglogo(alphaA1)}
    else if(Temelogo === "sunset"){setimglogo(alphaA0)}
    else if (Temelogo === "crazy") {setimglogo(alphaA4)}
    else if (Temelogo === "cat blue") {setimglogo(alphaA2)}
    else{imglogo(alphaA2)} 
  }, 100);




  return(
  <div className="box_alpha_logo" >
      <img src={imglogo} alt="alpha"  className="Alpha_logo"   />
    </div>
  )
}