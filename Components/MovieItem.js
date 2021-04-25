import React, { useState } from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DialogComp from './DialogComp';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MovieItem({ title, year, poster }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <Grid item sm={6} xs={12} lg={4}>
            <Card className={classes.root} onClick={() => setOpen(true)}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={poster}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{title} - {year}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <DialogComp
                open={open}
                setOpen={setOpen}
                title={title}
                year={year}
                poster={poster}
            />
        </Grid>
    );
};
