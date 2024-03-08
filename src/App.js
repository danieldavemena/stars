import './App.css';
import {Topbar, i} from './Topbar';
import BodyOne from './BodyOne';
import {BodyTwo, nameChanged} from './BodyTwo';
import {BodyThree} from './BodyThree';
import {BodyFour} from './BodyFour';

window.addEventListener('mousemove', e => {
  let mouse = {x: e.pageX, y: e.pageY};
  const mouseFX = document.querySelector('.mouseEffect');
  const shadow =  document.querySelector('.shadow');

  if (i === 1) {
    mouseFX.style.top = `${mouse.y - 20}px`;
    mouseFX.style.left = `${mouse.x - 20}px`;
    mouseFX.style.display = 'block'
  } else {
    shadow.style.setProperty('--x', `${e.clientX - 20}px`)
    shadow.style.setProperty('--y', `${e.clientY - 20}px`)
  }

})

window.addEventListener('scroll', e => {
  let rate = window.scrollY;
  let bodyOne = document.querySelector('.bodyOne');
  let texts = [document.querySelector('.textAnim'), document.querySelector('.bodyOne p')]
  let innerStars = document.querySelectorAll('.innerStars i')
  let starContainer = document.querySelector('.starContainer')
  let sun = document.querySelector('.bodyFour img');

  sun.style.transform = `rotate(${rate / 4 }deg)`
  
  if (nameChanged === 1) {
    let trigger = starContainer.getBoundingClientRect().height + starContainer.getBoundingClientRect().top
  
    console.log(trigger)

    if (trigger < 100) {
      
    }
  }

  innerStars.forEach(star => {
    star.style.transform = `translateY(${rate / 8}px)`;
  })

  texts.forEach(text => {
    text.style.transform = `translateY(${rate / -2}px)`;
  })
  bodyOne.style.transform = `translateY(${rate / 2}px)`;
  
  
})

function App() {
  
  return (
    <div className="App" style={{overflowY: "hidden"}}>
      <div className="mouseEffect"></div>
      <Topbar/>
      <BodyOne/>
      <BodyTwo/>
      <BodyThree/>
      <BodyFour />
    </div>
  );
}

export default App;
