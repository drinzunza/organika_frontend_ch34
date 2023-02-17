import './about.css';
import { useState } from 'react';

function About() {
  const [visible, setVisible] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);

  function getEmail() {
    return visible ? 'sinzunza@sdgku.edu' : '';    
  }

  function toggleEmail() {
    setVisible(!visible);
  }

  function validateCode(e) {
    const text = e.target.value;
    if (text.toLowerCase() === 'cool') {
      setPhoneVisible(true);
    } else {
      setPhoneVisible(false);
    }
  }

  function getNumber() {
    return phoneVisible ? '812 12332' : '';
  }

  return (
    <div className="about">
      <h2>About me</h2>
      <h4>I'm Sergio Inzunza</h4>
      <h6>{getEmail()}</h6>
      <button className="btn btn-sm btn-dark" onClick={toggleEmail}>
        Click to see my email
      </button>

      <hr />

      <p>Type the code to see my phone number</p>
      <input onChange={validateCode} placeholder="code"></input>

      <h6 className="mt-3">{getNumber()}</h6>
    </div>
  );
}

export default About;

/**
 * when the user clicks on the button,
 * call a function and setVisible to true
 */
