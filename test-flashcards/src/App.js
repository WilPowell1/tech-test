import React, { useState } from 'react';
import FlashcardList from './Flashcardlist';
//import axios from 'axios';
import './App.css';

function App() {

  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  return (
      <div>
        <FlashcardList flashcards={flashcards} />
      </div>
  )

}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    original: "this is the front",
    translation: "this is the back"
  },
  {
    id: 2,
    original: "here's some text",
    translation: "here's some more text"
  },
  {
    id: 3,
    original: "a string of words",
    translation: "a string of more words"
  }
]

export default App;

  /*const [categories, setCategories] = useState([])

  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(() => {
    axios
      .get('https://opentdb.com/api_category.php')
      .then(res => {
        setCategories(res.data.trivia_categories)
      })
  }, [])

  useEffect(() => {
   
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML= str
    return textArea.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios
    .get('https://opentdb.com/api.php', {
      params: {
        amount: amountEl.current.value,
        category: categoryEl.current.value
      }
    })
    .then(res => {
      setFlashcards(res.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer)
        const options = [
          ...questionItem.incorrect_answers.map(a => decodeString(a)),
          answer
        ]
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - .5)
        }
      }))
    })
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value={category.id} key={category.id}>{category.name}</option>
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of Questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}*/


/*import React, { useState, useEffect } from "react";
import cookie from "react-cookies";

import { googleTranslate } from "./utils/googleTranslate";

const App = () => {

  const [languageCodes, setlanguageCodes] = useState([]);
  const [language, setLanguage] = useState(cookie.load("language") ? cookie.load("language") : "en",)
  const [question, setQuestion] = useState(cookie.load("question")
  ? cookie.load("question")
  : "What language do you prefer to read with?");

  useEffect(() => {
    googleTranslate.getSupportedLanguages("en", function(err, languageCodes) {
      getLanguageCodes(languageCodes); // use a callback function to setState
    });

    const getLanguageCodes = languageCodes => {
      setlanguageCodes(languageCodes);
    }
  });

  const changeHandler = language => {
    let cookieLanguage = cookie.load("language");
    let transQuestion = "";

    const translating = transQuestion => {
      if (question !== transQuestion) {
        setQuestion(transQuestion);
        cookie.save("question", transQuestion, { path: "/" });
      }
    };

    // translate the question when selecting a different language
    if (language !== cookieLanguage) {
      googleTranslate.translate(question, language, function(err, translation) {
        transQuestion = translation.translatedText;
        translating(transQuestion);
      });
    }

    setLanguage(language);
    cookie.save("language", language, { path: "/" });
  }

    return (
      <div>
        <p>{question}</p>

        {/* iterate through language options to create a select box */
        //<select
          
/*className="select-language"
          value={language}
          onChange={e => {changeHandler(e.target.value)}}
        >
          {languageCodes.map(lang => (
            <option key={lang.language} value={lang.language}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    );

};
export default App;
*/