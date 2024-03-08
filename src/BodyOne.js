import React from 'react';
import { TypeAnimation } from 'react-type-animation';

let starArray = [];

function BodyOne() {

  const stars = (star, size) => {
    const count = star;
    let i = 0;

    while (i<count) {
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);

      //let star = document.createElement('i');
      //star.style.top = `${pos.y}px`;
      //star.style.left = `${pos.x}px`;

      starArray[i] = {
        top: `${y}px`,
        left: `${x}px`,
        width: `${size}px`,
        height: `${size}px`
      }
      i++;
    }

    return( starArray.map(star => <i style={star}></i>) );
  }
    
  return(
      <div className="bodyOne" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        
        {stars(35, 2.2)}
        <div className='innerStars'>{stars(35, 4)}</div>
        <TypeAnimation
          sequence={[
        // Same substring at the start will only be typed out once, initially
            'YOU NEED DARK TO SEE THE LIGHT',
            5000, // wait 1s before replacing "Mice" with "Hamsters"
            'YOU NEED LIGHT TO SEE THE DARK',
            5000,
       ]}
        wrapper="span"
        speed={50}
        className='textAnim'
        repeat={Infinity}
      />
      <p>TURN ON THE SWITCH TO SEE THE STARS</p>
      </div>
  )
}

export default BodyOne;