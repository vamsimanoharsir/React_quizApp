import './App.css';
import { Routes, Route } from "react-router-dom"; //BrowserRouter import in index.js
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import NextPage from './components/NextPage';
import { useState } from 'react';
import FinalPage from './components/FinalPage';
import {Contexts} from './components/Contexts'

function App() {

  const [score,setScore]=useState(0)

  return (
    <div className="App">
      <Contexts.Provider value={{score,setScore}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/quizpage' element={<QuizPage />} />
          <Route path='/nextpage' element={<NextPage />} />
          <Route path='/submit' element={<FinalPage />} />
        </Routes>
      </Contexts.Provider>
    </div>
  );
}

export default App;
