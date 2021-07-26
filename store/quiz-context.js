import React, {useState} from 'react';

const QuizContext = React.createContext({
    score: 0,
    userName: '',
    updateScore: () => {},
    updateUserName: (name) => {}
});

export const QuizContextProvider = (props) => {

    const [score, setScore] = useState(0);
    const [userName, setUserName] = useState('');

    const updateScoreHandler = () => {
        setScore(score+1)
    }

    const updateUserNameHandler = (name) => {
        setUserName(name);
    }


    return <QuizContext.Provider value = {{
    score: score, 
    userName: userName,
    updateScore: updateScoreHandler, 
    updateUserName: updateUserNameHandler

    }}>
        {props.children}
    </QuizContext.Provider>
}

export default QuizContext;