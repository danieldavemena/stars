import React from 'react';
import sun from './assets/sun.png';


function BodyFour() {
    return(
        <div className="bodyFour">
            <div className="glow"></div>
            <img src={sun} width="600px" alt=""/>
            <p>The star around which Earth and other planets orbit. It provides heat and light to Earth. It has a mean distance from Earth of about 150 million kilometers (93 million miles), a diameter of approximately 1,392,000 kilometers (865,000 miles), and a mass about 335,000 times that of Earth. The Sun is the star at the center of the Solar System. It is a massive, hot ball of plasma, inflated and heated by energy produced by nuclear fusion reactions at its core. Part of this energy is emitted from its surface as light, ultraviolet, and infrared radiation, providing most of the energy for life on Earth. </p>
        </div>
    )
}

export {BodyFour}