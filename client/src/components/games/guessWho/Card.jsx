import React, { useEffect, useState } from 'react'

function Card(props) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (props.selectedCard < 19) {
      setIsClicked(!isClicked);
      props.onCardClick(props.id);
    } else {
      setIsClicked(false)
      props.onCardClick(props.id);
    }
  }
  return (
    <div style={{ opacity: isClicked ? "0.3" : '1' }} onClick={handleClick}>
      <div class="card" style={{ background: "transparent", width: "7vw", height: "20vh" }}>
        <img src={props.imgCartoon} style={{ maxHeight: "10vh" }} class="card-img-top" alt="..." />
        <div style={{ textAlign: "center" }}>
          <h6>{props.name}</h6>
          <div style={{height:"5vh"}}>
          <p style={{fontSize:'0.6vw', margin:0}}>Pelo: {props.hair}</p>
         <p style={{fontSize:'0.6vw', margin:0}}>Ojos: {props.eyes}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Card