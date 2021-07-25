import { useState } from 'react'
import { useRouter } from 'next/router'
import ErrorMessage from '../components/ErrorMessage';
import Head from 'next/head'
import classes from '../styles/index.module.css'
import Header from '../components/Header'
import { Link } from 'react-router-dom';
function HomePage() {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (text) => {
    if (text) {

      setName(text);
    } else {
      setName('');
    }
  };
  const router = useRouter()
  let api = '';
  const handleSubmit = () => {
    if (!difficulty || !name || difficulty === 'select') {
      setError(true);
      return;
    } else {
      setError(false);
      //for test 
      api = 'https://opentdb.com/api.php?amount=15&category=18&difficulty=' + difficulty+'&type=multiple';
      router.push({
        pathname: '/quiz',
        query: { link: api }
      })

    }
  };
  return (
    <div className={classes.content} >
      <div className={classes.settings}>
        <div className={classes.settings__select}>
          <Header></Header>
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <input
            placeholder="User Name"
            type="text"
            style={{ marginBottom: 25 }}
            className={classes.elements}
            id="name"
            value={name}
            onChange={(event) => handleChange(event.target.value)}
          />


          <select value={difficulty}

            className={classes.elements}
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}>
            <option key="select" value="select" >Difficulty Level</option>
            <option key="Easy" value="easy">Easy</option>
            <option key="Medium" value="medium">Medium</option>
            <option key="Hard" value="hard">Hard</option>

          </select>
            
          <button   className={classes.button} onClick={handleSubmit}>Start Quiz</button>
         
        </div>
      </div>
      <img src='/quiz.svg' className={classes.banner}></img>
    </div>


  )
}
export default HomePage;

