import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Link href="/" passHref>
                    <Button variant="contained" disableElevation disableRipple color="primary">Home</Button>
                </Link>
                <Link href="/movie" passHref>
                    <Button variant="contained" color="primary">Movie</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};
