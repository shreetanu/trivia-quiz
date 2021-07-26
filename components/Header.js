import { Link } from "react-router-dom";
import classes from '../styles/header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <h2 className={classes.title}>
        Trivia Quiz
      </h2>
      <hr className={classes.divider} />
    </div>
  );
};

export default Header;