import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import classes from "../../styles/quiz.module.css";
import { useRouter } from "next/router";

const QuizPage = () => {
  const [options, setOptions] = useState();
  const [currQuestion, setCurrQuestion] = useState(0);
  const [questions, setQuestion] = useState([]);

  const router = useRouter();

  useEffect(async () => {
    const { data } = await axios.get(router.query.api);
    setQuestion(data.results);
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currQuestion]?.correct_answer,
          ...questions[currQuestion]?.incorrect_answers,
        ])
    );
  }, [questions]);

  //console.log(questions);

  const handleShuffle = (choices) => {
    return choices.sort(() => Math.random() - 0.5);
  };

  return (
    <div className={classes.quiz}>
      <h2 className={classes.title}>Welcome Mohit!</h2>

      {questions ? (
        <Fragment>
          <div className={classes.info}>
            <div>{questions[currQuestion].category}</div>
            <div>Score : 100</div>
          </div>
          {/* (question component) <Question
            currQues={currQuestion}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            setQuestions={setQuestions}
          /> */}
        </Fragment>
      ) : (
        <div>Loading!!!</div>
      )}
    </div>
  );
};

export default QuizPage;
