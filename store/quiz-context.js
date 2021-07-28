import React, {useState, useCallback} from 'react';

const QuizContext = React.createContext({
    score: 0,
    userName: '',
    updateScore: () => {},
    updateUserName: (name) => {},
    resetDetails: () => {}
});

export const QuizContextProvider = (props) => {
    //Quiz Context added
    const [score, setScore] = useState(0);
    const [userName, setUserName] = useState('');

    const updateScoreHandler = () => {
        setScore(score+1)
    }

    const updateUserNameHandler = (name) => {
        setUserName(name);
    }

    const resetDetailsHandler = () => {
        setScore(0);
        setUserName('');
    }


    return <QuizContext.Provider value = {{
    score: score, 
    userName: userName,
    updateScore: updateScoreHandler, 
    updateUserName: updateUserNameHandler,
    resetDetails: resetDetailsHandler

    }}>
        {props.children}
    </QuizContext.Provider>
}

export default QuizContext;