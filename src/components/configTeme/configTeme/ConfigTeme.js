import React, {useState} from 'react'

import "./ConfigTeme.css"

//wallpaper micro
import sunset from '../../../media/imagens/background/micro/sunset.jpg'
import crazy from '../../../media/imagens/background/micro/crazy.jpg'
import cat from '../../../media/imagens/background/micro/portrait-cat.jpg'
import people from '../../../media/imagens/background/micro/people-woman.jpg'
//wallpaper 
import sunsetWall from '../../../media/imagens/background/wallpaper/sunset.jpg'
import crazyWall from '../../../media/imagens/background/wallpaper/crazy.jpg'
import catWall from '../../../media/imagens/background/wallpaper/portrait-cat.jpg'
import peopleWall from '../../../media/imagens/background/wallpaper/people-woman.jpg'

export default function ConfigTeme(props){
  const [name, setname] = useState(localStorage.getItem("name"))
    const initTemeContentStyle = {
      backgroundColor: localStorage.getItem("color1"),
      color: localStorage.getItem("fontecolor")
    }

    function newname(){
      localStorage.setItem("name", name.substring(0,1).toUpperCase().concat(name.substring(1)))
  
  
    }
   
    const inputNameStyle = {
      borderBottom: `0.4vh solid ${localStorage.getItem("color2")}`,
      color: localStorage.getItem("fontecolor")
    } 
    
    return( 
    
      <div id="init_teme_content" style={initTemeContentStyle}>
      
        {props.title}
        <div className="item_box_init_teme_content">
          <h3>Wallpaper:</h3>
          <ul>
            <ItemImgWallTemeContentList
              img={sunset}
              wallpaper={sunsetWall}
              alt="Wallparer sunset"
              logo="sunset"
              name="Sunset"
            />
            <ItemImgWallTemeContentList 
              img={crazy}
              wallpaper={crazyWall}
              logo="crazy"
              alt="Wallparer Crazy"
              name="Crazy"
            />
            <ItemImgWallTemeContentList 
              img={cat}
              wallpaper={catWall}
              logo="cat blue"
              alt="Wallparer Cat"
              name="Cat"
            />
            <ItemImgWallTemeContentList 
              img={people}
              wallpaper={peopleWall}
              logo="portrait"
              alt="Wallparer Portrait"
              name="Portrait"
            />
          </ul>
        </div>
        <div className="item_box_init_teme_content">
          <h3> Color Primary: </h3>
          <ul>
          <ItemColorPrimaryTemeContentList
            type="color1"
            color="#171717"
          />
          <ItemColorPrimaryTemeContentList
            type="color1"
            color="#353535"
          />
          <ItemColorPrimaryTemeContentList
            type="color1"
            color="#301a3a"
          />
          <ItemColorPrimaryTemeContentList
            color="#240f46"
            type="color1"
          />
          <ItemColorPrimaryTemeContentList
            color="#560950"
            type="color1"
          />
          <ItemColorPrimaryTemeContentList
            color="#062d48"
            type="color1"
          />
          <ItemColorPrimaryTemeContentList
            color="#064845"
            type="color1"
          />
          </ul>
        </div>
        <div className="item_box_init_teme_content">
          <h3> Color secondary: </h3>
          <ul>
          <ItemColorPrimaryTemeContentList
            type="color2"
            color="#f9f9f9"
          />
          <ItemColorPrimaryTemeContentList
            type="color2"
            color="#868686"
          />
          <ItemColorPrimaryTemeContentList
            type="color2"
            color="#8d0ba2"
          />
          <ItemColorPrimaryTemeContentList
            color="#5c2aaf"
            type="color2"
          />
          <ItemColorPrimaryTemeContentList
            color="#ca18bc"
            type="color2"
          />
          <ItemColorPrimaryTemeContentList
            color="#116ba9"
            type="color2"
          />
          <ItemColorPrimaryTemeContentList
            color="#009e97"
            type="color2"
          />
          </ul>
        </div>
        <div className="item_box_init_teme_content">
          <h3> Fonte Color: </h3>
          <ul>
          <ItemColorPrimaryTemeContentList
            type="fontecolor"
            color="#f9f9f9"
          />
          <ItemColorPrimaryTemeContentList
            type="fontecolor"
            color="#868686"
          />

          <ItemColorPrimaryTemeContentList
            type="fontecolor"
            color="#8d0ba2"
          />
          <ItemColorPrimaryTemeContentList
            color="#5c2aaf"
            type="fontecolor"
          />
          <ItemColorPrimaryTemeContentList
            color="#ca18bc"
            type="fontecolor"
          />
          <ItemColorPrimaryTemeContentList
            color="#116ba9"
            type="fontecolor"
          />
          <ItemColorPrimaryTemeContentList
            color="#009e97"
            type="fontecolor"
          />
          </ul>
        </div>
        <div className="item_box_init_teme_content">
          <h3> Your Name: </h3>
          <form onSubmit={newname}>
            <input type="text" className="input_name_teme"  spellcheck="false"
              style={inputNameStyle}
              onChange={event => setname(event.target.value)}
              value={name} 
            />
            <button className="button_invisible" type="submit"></button>
          </form> 
        </div>

      </div>
  );
  
}


function ItemImgWallTemeContentList(props){
  const [ItemImgWallTemeContentListStyleAttributes,
    setItemImgWallTemeContentListStyleAttributes ] = useState()
 const ItemImgWallTemeContentListStyle = ItemImgWallTemeContentListStyleAttributes
 if(localStorage.getItem("wallpaper") === props.wallpaper){
  setInterval(() => {
    if(localStorage.getItem("wallpaper") === props.wallpaper)
      setItemImgWallTemeContentListStyleAttributes({
        border:`0.45vh solid ${localStorage.getItem("color2")}`
      })
  }, 0)
}
  function selectWallpaper(){
    localStorage.setItem("wallpaper", props.wallpaper)
    localStorage.setItem("logo", props.logo)
  }
  return(
    <li className="item_img_wall_teme_content_list">
      <a href="/">
        <img src={props.img} alt={props.alt} 
          style={ItemImgWallTemeContentListStyle}
          className="img_wall_teme_content" 
          onClick={selectWallpaper} 
        />
      </a>
      <span>{props.name}</span>
    </li>
  )
}


function ItemColorPrimaryTemeContentList(props){
  
  const [ItemColorPrimaryTemeContentListStyleAttributes,
     setItemColorTemeContentListStyleAttributes ] = useState({background:props.color})
  const ItemColorTemeContentListStyle = ItemColorPrimaryTemeContentListStyleAttributes

  if(localStorage.getItem(`${props.type}`) === props.color && props.type !== "color2" ){
    setInterval(() => {
      if(localStorage.getItem(`${props.type}`) === props.color)
        setItemColorTemeContentListStyleAttributes({
          border:`0.45vh solid ${localStorage.getItem("color2")}`,
          background:props.color,
          
        })
    }, 0)
  }else if (localStorage.getItem(`${props.type}`) === props.color && props.type === "color2" ){ 
    setInterval(() => {
      if(localStorage.getItem(`${props.type}`) === props.color)
        setItemColorTemeContentListStyleAttributes({
          border:`0.45vh solid silver`,
          background:props.color,
          
        })
    }, 0)
  }
  function selectWallpaper(){
    localStorage.setItem(`${props.type}`, props.color)
  
  }
  return(
    <li className="item_color_teme_content_list">
      <a href="/">
        <div alt={props.alt} 
          style={ItemColorTemeContentListStyle}
          className="color_teme_content" 
          onClick={selectWallpaper} 
        ></div>
      </a>
    </li>
  )
}