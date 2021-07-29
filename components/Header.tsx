import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from '../styles/Header.module.css';
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import {Link} from "@material-ui/core";

export default function Header() {
    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link href='/' >
                        <IconButton edge="start"   aria-label="menu">
                            <QuestionAnswerIcon style={{color:'white'}}/>
                        </IconButton>
                    </Link>
                    <Typography variant="h6" className={styles.title}>
                        Trivia Quiz
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
