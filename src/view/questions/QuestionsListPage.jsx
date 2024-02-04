import React, { useEffect, useState } from 'react';
import {  db } from '../../config/firebaseConfig';
import { collection,getDocs, query, where } from 'firebase/firestore';
import './QuestionsListPage.css';


const QuestionsListPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {

        const q = query(collection(db, 'questions'), where('public', '==', true));
        const querySnapshot = await getDocs(q);

        const questionsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setQuestions(questionsData);
      } catch (error) {
        console.error('Error fetching questions: ', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <>
      <div className="questions-list">
        {questions.map((question) => (
          <div key={question.id} className="question-card">
            <h3>{question.question}</h3>
            {question.phone && <p>Contact Number: {question.phone}</p>}
                        {question.answer && (
              <div className="answer-section">
                <h4>Answer</h4>
                <p>{question.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default QuestionsListPage;
