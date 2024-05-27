import React, { useState } from 'react';
import './MatchGame.css';

const MatchGame = () => {
  const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];
  const [answers, setAnswers] = useState(['Answer A', 'Answer B', 'Answer C', 'Answer D', 'Answer E']);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex === index) return;

    const newAnswers = [...answers];
    const [draggedAnswer] = newAnswers.splice(draggedIndex, 1);
    newAnswers.splice(index, 0, draggedAnswer);
    setAnswers(newAnswers);
    setDraggedIndex(index);
  };

  const handleDrop = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="match-game">
      <div className="questions-column">
        {questions.map((question, index) => (
          <div key={index} className="droppable-target">
            {question}
          </div>
        ))}
      </div>
      <div className="answers-column">
        {answers.map((answer, index) => (
          <div
            key={index}
            className="draggable-item"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={handleDrop}
          >
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchGame;
