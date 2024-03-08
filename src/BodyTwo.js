import React, { useState } from 'react';

let nameChanged = 0;

function BodyTwo() {

  const [name, setName] = useState('STATE YOUR NAME');
  let tempName;

  const submit = (e) => {
    e.preventDefault();
    if (e.target[0].value !== "") {
      console.log(tempName);
      setName(`Hello, ${e.target[0].value}`);
      e.target[0].value = "";
      const bodyThree = document.querySelector('.bodyThree');
      const bodyFour = document.querySelector('.bodyFour');

      let top = window.innerHeight * 2;
      nameChanged = 1;

      bodyThree.style.display = 'flex';
      bodyFour.style.display = 'flex';

      setTimeout(() => {
        window.scrollTo({
          top: top,
          left: 0,
          behavior: 'smooth'
        })
      }, 1000);
      
    }
  }

  return(
    <div className="bodyTwo">
      <h1 className="intro">{name}</h1>
      <form className="formOne" onSubmit={submit}>
        <input className='name' type='text' placeholder='INTRODUCE YOUR NAME' />
        <input type='submit'/>
      </form>
    </div>
  )

}

export {BodyTwo, nameChanged};