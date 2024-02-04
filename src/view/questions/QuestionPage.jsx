import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import './QuestionPage.css';
import {  db } from '../../config/firebaseConfig';
import { collection, addDoc} from 'firebase/firestore';



const QuestionPage = () => {
  const navigate = useNavigate();
  const isUserSignedIn = useSelector((state) => state.auth.isUserSignedIn);

  const [question, setQuestion] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
      const questionData = {
      question,
      phone: contactNumber || null, 
      public: isPublic,
    };
  
    try {
  
      await addDoc(collection(db, 'questions'), questionData);
        alert('Question submitted successfully!');
      navigate('/questions');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting question. Please try again later.');
    }
  };
  

  if (!isUserSignedIn) {
    alert('Login to your member account before asking a question!');
    return <Navigate to="/login" />;
  }

  return (
    <>
      <form className='form-questions' onSubmit={handleSubmit}>
        <label>
          Question:
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </label>

        <label>
          Contact Number (optional):
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <span>(Optional)</span>
        </label>

        <label>
          <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
          Allow my question to be made public
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default QuestionPage;
