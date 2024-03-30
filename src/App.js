import './App.css';
import {Topbar, i} from './Topbar';
import BodyOne from './BodyOne';
import {BodyTwo, nameChanged} from './BodyTwo';
import {BodyThree} from './BodyThree';
import {BodyFour} from './BodyFour';
import {BodyFive} from './BodyFive';


window.addEventListener('mousemove', e => {
  let mouse = {x: e.pageX, y: e.pageY};
  const mouseFX = document.querySelector('.mouseEffect');
  const shadow =  document.querySelector('.shadow');

  if (i === 1) {
    mouseFX.style.top = `${mouse.y - 20}px`;
    mouseFX.style.left = `${mouse.x - 20}px`;
    mouseFX.style.display = 'block';
    
  } else {
    shadow.style.setProperty('--x', `${e.clientX - 20}px`)
    shadow.style.setProperty('--y', `${e.clientY - 20}px`)
  }

})

window.addEventListener('scroll', e => {
  let rate = window.scrollY;
  let bodyOne = document.querySelector('.bodyOne');
  let bodyThree = document.querySelector('.bodyThree');
  let bodyFour = document.querySelector('.bodyFour');
  let bodyFive = document.querySelector('.bodyFive');
  let texts = [document.querySelector('.textAnim'), document.querySelector('.bodyOne p')];
  let innerStars = document.querySelectorAll('.innerStars i');
  let one = document.querySelector('.one');
  let two = document.querySelector('.two');
  let three = document.querySelector('.three');
  let starContainer = document.querySelector('.starContainer');
  let fourText = document.querySelector('.bodyFour p');

  let sun = document.querySelector('.bodyFour img');

  sun.style.transform = `rotate(${rate / 4 }deg)`;
  
  if (nameChanged === 1) {
    let trigger = bodyFive.getBoundingClientRect().y;
    let triggerThree = bodyThree.getBoundingClientRect().y;
    let triggerFour = bodyFour.getBoundingClientRect().y;

    console.log(triggerThree);
  
    

    if (trigger < 100) {
      setTimeout(() => {
        one.style.transform = 'translateY(0)'
      }, 50);
      
      setTimeout(() => {
        two.style.transform = 'translateY(0)'
      }, 150);

      setTimeout(() => {
        three.style.transform = 'translateY(0)'
      }, 250);
    }

    if (triggerThree < 50) {
      starContainer.style.opacity = '1';
    }

    if (triggerFour < 100) {
      fourText.style.transform = 'translateX(0)';
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
      <BodyFive />
    </div>
  );
}

export default App;
