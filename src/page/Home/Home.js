import React from 'react'

import "./Home.css"

//import components
import ConfigTeme from '../../components/configTeme/configTeme/ConfigTeme'
import AlpgaLogo from   '../../components/AlphaLogo/AlphaLogo'
import ButtonConfig from '../../components/ButtonConfig/ButtonConfig'



export default function Home(){
  const name = localStorage.getItem("name")
  const wallpaper = localStorage.getItem("wallpaper")
  const color1 = localStorage.getItem("color1")
  const color2 = localStorage.getItem("color2")
  const fontecolor = localStorage.getItem("fontecolor")
  const logo = localStorage.getItem("logo")


  const homePageTeme = {
    backgroundImage: `url(${localStorage.getItem("wallpaper")})`,
    color: localStorage.getItem("fontecolor"),
  }

  if(name === null ||  name === "" || wallpaper === null || color1 === null || color2 === null || fontecolor === null || logo === null ) return( 
    <div id="home_page_Teme" style={homePageTeme}>
      <ConfigTeme 
        title={<h2> Oi {name}, Vamos Montar seu tema...</h2>}
      />
    </div>
  );

  else return(
    <div id="home_page" style={homePageTeme}>
      <AlpgaLogo />
      <ButtonConfig />
      
    </div>
  );
  
}


