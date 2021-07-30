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

            <AppBar position="static">
                <Toolbar >
                    <Link href='/' >
                        <div style={{ display: "flex", justifyContent: 'flex-start', alignItems: 'center'}}>
                        <IconButton edge="start"   aria-label="menu">
                            <QuestionAnswerIcon style={{color:'white'}}/>
                        </IconButton>
                        <Typography variant="h6"  style={{color:'white'}}>
                            Trivia Quiz
                        </Typography>
                        </div>
                    </Link>
                </Toolbar>
            </AppBar>

    );
}
