import React, { useEffect, useRef } from 'react';
/*import FlashcardList from './FlashcardList'*/
import '@vitalets/google-translate-api';
import './Translator.css';
import axios from 'axios';

const Translator = () => {

  /*const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }*/
    return (
        <div className="main">
		      <input className="input-top" type="text" name="Search" placeholder="Translate..."></input>
		      <button>Translate</button>
          <input className="input-bottom" type="text" name="Search" placeholder="....."></input>
          <button>Save to Flashcard</button>
        </div>
);
};

export default Translator;