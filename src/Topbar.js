import React, { useEffect, useState} from 'react';
let i=0;

function Topbar() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let tick = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => {
      clearInterval(tick)
    }
  })

    const slide = () => {
        const circle = document.querySelector('.circle');
        const toggle = document.querySelector('.toggleSwitch')
        const body = document.body;
        const stars = document.querySelectorAll('.bodyOne i');
        const innerStars = document.querySelectorAll('.innerStars i');
        const bodyTwo = document.querySelector('.bodyTwo');
        const bodyThree = document.querySelector('.bodyThree');
        const bodyFour = document.querySelector('.bodyFour');
        const mouse = document.querySelector('.mouseEffect');
        const shadow = document.querySelector('.shadow');
        const textAnim = document.querySelector('.textAnim');
        const p = document.querySelector('.bodyOne p');
        
        if (i === 0) {
          circle.style.transform = 'translateX(50px)';
          circle.style.background = 'var(--color-7)';
          toggle.style.border = '5px solid var(--color-4)'
          toggle.style.background = 'var(--color-3)'
          body.style.background = 'var(--color-5)';
          bodyTwo.style.background = 'var(--color-8)';
          bodyTwo.style.display = 'flex'
          bodyThree.style.background = 'var(--color-8)';
          bodyFour.style.background = 'var(--color-8)';
          mouse.style.display = 'block';
          shadow.style.display = 'none';
          textAnim.style.textShadow = '0 0 5px var(--color-7)';
          p.style.textShadow = '0 0 3px var(--color-7)';
          stars.forEach(star => {   
            star.style.display = 'block';
          })
          innerStars.forEach(star => {   
            star.style.display = 'block';
          })
          i++;
        } else {
          circle.style.transform = 'translateX(0px)';
         circle.style.background = 'var(--color-6)';
          toggle.style.border = '5px solid var(--color-3)'
          toggle.style.background = 'var(--color-4)'
          body.style.background = 'var(--color-1)'
          bodyTwo.style.background = 'var(--color-4)';
          bodyThree.style.background = 'var(--color-4)';
          bodyFour.style.background = 'var(--color-4)';
          mouse.style.display = 'none';
          shadow.style.display = 'block';
          textAnim.style.textShadow = 'none';
          p.style.textShadow = 'none';
          stars.forEach(star => {
            star.style.display = 'none';
          })
          innerStars.forEach(star => {   
            star.style.display = 'none';
          })
          i=0;
        }
    }

    return(
      <div className="topbar">
        <div className="shadow"></div>        
        <h1 className="time">{time.toLocaleTimeString()}</h1>
        <div className="toggleSwitch" onClick={slide}>
            <div className="circle"></div>
        </div>
      </div>
  )
}

export { Topbar, i};