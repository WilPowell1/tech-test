import React from 'react';
import Carousel from './Flashcard';
/*import Translator from './Translator';*/


const FlashcardList = ({ flashcards }) => {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <Carousel flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
};

export default FlashcardList;