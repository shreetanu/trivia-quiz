import React, {useState, ReactNode} from 'react';

const QuizContext = React.createContext({
    score: 0,
    userName: '',
    updateScore: () => {},
    updateUserName: (name: string) => {},
    resetDetails: () => {}
});

interface IQuizContextProviderProps {
    children?: ReactNode;
}


export const QuizContextProvider = (props: IQuizContextProviderProps) => {
    //Quiz Context added
    const [score, setScore] = useState<number>(0);
    const [userName, setUserName] = useState<string>('');

    const updateScoreHandler = () => {
        setScore(score+1)
    }

    const updateUserNameHandler = (name: string) => {
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