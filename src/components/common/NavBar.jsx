import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed !important",
        width: "100%",
        top: 0,
        left: 0
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: "#FFF",
        // border: "1px solid #332e2e",
        padding: "0 10px"
    },
    iconButton: {
        padding: 10,
        color: "#FFF"
    },
    navBar: {
        backgroundColor: "#000"
    }
}));

const NavBar = (props) => {

    const classes = useStyles();
    const [search, setSearch] = useState("")

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navBar}>
                <Toolbar>
                    <ArrowBackIcon />
                    <Typography className={classes.title} variant="h6" noWrap>
                        Romantic Comedy
                    </Typography>
                    <InputBase
                        className={classes.input}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={() => props.onSearch(search)} >
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default NavBar; 