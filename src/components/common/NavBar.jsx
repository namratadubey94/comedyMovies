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
import { Button } from '@material-ui/core';

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
        border: "1px solid #332e2e",
        padding: "0 10px"
    },
    iconButton: {
        padding: 10,
        color: "#FFF"
    },
    navBar: {
        backgroundColor: "#000"
    },
    searchBtn: {
        color: "#FFF",
        background: "#2ed0d2",
        padding: "5px 15px",
        borderRadius: 8,
        marginLeft: 5
    }
}));

const NavBar = (props) => {

    const classes = useStyles();
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navBar}>
                <Toolbar>
                    <ArrowBackIcon />
                    <Typography className={classes.title} variant="h6" noWrap>
                        Romantic Comedy
                    </Typography>
                    <div style={{ display: showSearch ? "block" : "none" }}>
                        <InputBase
                            className={classes.input}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                        <Button className={classes.searchBtn} onClick={() => props.onSearch(search)}>Search</Button>
                    </div>

                    <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={() => setShowSearch(!showSearch)}>
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default NavBar; 