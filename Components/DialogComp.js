import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    img: {
        maxHeight: '90vmin',
        [theme.breakpoints.up('sm')]: {
            maxHeight: '320px',
        },
    },
}));

export default function AlertDialog({ open, setOpen, title, year, poster }) {
    const classes = useStyles()
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
        >
            <DialogTitle>{title} - {year}</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <img className={classes.img} src={poster} alt={title} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Typography variant="body1">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except
                            AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};
