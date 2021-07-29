
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from "react";
import { BottomNavigation } from '@material-ui/core';

import {  makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
    root: {
        width: 500,
    },
})
function Footer() {
    const classes = useStyles();
    return(
    <BottomNavigation className={classes.root} >
    <PlayArrowIcon color='primary'/>
        <Typography variant="h6" color='primary'  style={{marginLeft:"10px"}} >
            Let&apos;s Play
        </Typography>
    </BottomNavigation>
);
}
export default Footer;