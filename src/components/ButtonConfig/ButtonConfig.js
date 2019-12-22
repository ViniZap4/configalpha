import React, { useState } from 'react'

import './ButtonConfig.css'

//inport icons 
import closeIcon from '../../media/imagens/icon/close/close6.png'
import configIcon from '../../media/imagens/icon/config/config4.png'
import ConfigTeme from '../configTeme/configTeme/ConfigTeme'

export default function ButtonConfig(){
  const[imgConfigbutton, setimgConfigbutton]= useState(configIcon)
  const[state, setsetate] = useState(0)

  const [ contentConfigtemes, setcontentConfigtemes  ] = useState()

  const [contentConfigTemesClassName, setcontentConfigTemesClassName] = useState("content_config_temes_Close")
  const buttonConfigTeme = {
    backgroundColor:localStorage.getItem("color1"),
  }
 

  function openClose(){
    if(state === 0){
      setcontentConfigTemesClassName("content_config_temes")
      setimgConfigbutton(closeIcon)
      setcontentConfigtemes(
        
          <ConfigTeme 
            title={<h2> Alterando tema: </h2>}
          />
        
      )
      setsetate(1)
    }else if (state===1){
      setimgConfigbutton(configIcon)
 
      setsetate(0)
      setcontentConfigTemesClassName("content_config_temes_Close")
        

    }
  }

  return(<>
    <div className="button_config_teme" style={buttonConfigTeme} onClick={openClose}>
      <img src={imgConfigbutton} alt="close"  className="img_button_config_teme" />
    </div>
    <div className={contentConfigTemesClassName}>
      {contentConfigtemes}
     </div>
  </>);
  }