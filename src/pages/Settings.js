import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import Uselocalstorage from '../components/Uselocalstorage'

function Settings() {
  const [settings, setSettings] = Uselocalstorage("todos",{
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1
})
useEffect(() => {
  const root = document.documentElement
  for (let key in settings){
    root.style.setProperty(key, settings[key])
  }
}, [settings])
  const [Theme, setTheme] = useState("light");
  const themes = [
    {
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757"
    },
    {
        "--background-color": "rgb(29, 29, 29)",
        "--background-light": "rgb(77, 77, 77)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#ffffff",
        "--text-light": "#eceaea",
    }
]
function changeTheme(i){
  const _theme = {...themes[i]}
  setTheme(i === 0 ? "light" :  "dark")
  let _settings = {...settings}
  for(let key in _theme){
      _settings[key] = _theme[key]
  }
    setSettings(_settings)
}


const [PrimaryColor, setPrimaryColor] = useState(0);
const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)"
]
function changeColor(i){
  let _color = primaryColors[i]
  let _settings = {...settings}
  _settings["--primary-color"]=_color
  setPrimaryColor(i)
  setSettings(_settings)
}

const [fontSize, setFontSize] = useState(1)
const fontSizes = [
  {
      title: "Small",
      value: "12px"
  },
  {
      title: "Medium",
      value: "16px"
  },
  {
      title: "Large",
      value: "20px"
  }
]
function changeFontSize(i){
  const _size = fontSizes[i]
  let _settings = {...settings}
  _settings["--font-size"] = _size.value
  setFontSize(i)
  setSettings(_settings)
}


const [animationSpeed, setanimationSpeed] = useState(1)
const animationSpeeds = [
  {
        title: "Slow",
        value: 2
  },
  {
        title: "Medium",
        value: 1
  },
  {
        title: "Fast",
        value: .5
  }
]
function changeAnimationSpeed(i){
  const _speed = animationSpeeds[i]
  let _settings = {...settings}
  _settings["--animation-speed"] = _speed.value
  setanimationSpeed(i)
  setSettings(_settings)
}



  return (
    <div>
      <div className="section d-block">
        <h2>Preffered Theme</h2>
        <div className="options-container">
          <div className='options light' onClick={() => changeTheme(0)}>
            {Theme === "light" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />

              </div>
            )}
          </div>
          <div className='options dark' onClick={() => changeTheme(1)}>
            {Theme === "dark" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />

              </div>
            )}
          </div>
        </div>
      </div>
      <div className="section d-block">
        <h2>Preffered Color</h2>
        <div className="options-container">
          
            {primaryColors.map((color, index) =>  (
              <div className='options light' style={{background:color}} onClick={() => changeColor(index)}>
                {PrimaryColor == index && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />

              </div>
            )}
           
          </div>
           ))}
        </div>
      </div>
      <div className="section d-block">
        <h2>Font Size</h2>
        <div className="options-container" >
          
            {fontSizes.map((font, index) =>  (
          <button className='btn' onClick={() => changeFontSize(index)}>{font.title}
          { fontSize === index &&
           <span> <FontAwesomeIcon icon={faCheck} /> </span>
          }
          </button>
           ))}
        </div>
      </div>
      <div className="section d-block">
        <h2>Animation Speeds</h2>
        <div className="options-container" >
          
            {animationSpeeds.map((speed, index) =>  (
          <button className='btn' onClick={() => changeAnimationSpeed(index)}>{speed.title}
          { animationSpeed === index &&
           <span> <FontAwesomeIcon icon={faCheck} /> </span>
          }
          </button>
           ))}
        </div>
      </div>
    </div>

  )
}

export default Settings