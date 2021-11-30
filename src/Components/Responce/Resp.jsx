import React from 'react'
import '../Responce/Resp.css'

export default function Resp(props) {
    return (
        <div className="main-block">
          <span> City : {props.city}  </span><br></br>
          <span>Temepature: {props.temp}</span><br></br>
          <span> Feels like : {props.feel}</span>
        </div>
    )
}
