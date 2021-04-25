import { FormControl, Grid, Input, InputAdornment, InputLabel, makeStyles } from "@material-ui/core"
import { Search } from '@material-ui/icons';
import { Fragment, useState } from "react";
import { Meta, MovieItem } from "../Components";

const useStyles = makeStyles(theme => ({
    root: {},
}));

export default function Movie() {
    const [keyword, setKeyword] = useState('');
    const [movies, setMovies] = useState([]);
    const classes = useStyles();

    const fetchAPI = async keyword => {
        const result = await fetch(`http://www.omdbapi.com/?apikey=ede299a&type=movie&s=${keyword}`);
        const data = await result.json();
        if (data.Error) return setMovies([]);
        setMovies(data.Search);
    };

    return (
        <Fragment>
            <Meta
                keywords="movies"
                description="showing movie list from omdb API"
                title="project | movie"

            />
            <FormControl margin="normal" fullWidth className={classes.root}>
                <InputLabel htmlFor="input-with-icon-adornment">Search Your Movie</InputLabel>
                <Input
                    value={keyword}
                    onChange={({ target }) => { setKeyword(target.value); fetchAPI(target.value) }}
                    autoFocus
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="end">
                            <Search />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Grid container spacing={3}>
                {
                    movies.length > 0 && movies.map(({ Title, Poster, Year }, index) =>
                        <MovieItem
                            key={index}
                            title={Title}
                            poster={Poster}
                            year={Year}
                        />
                    )
                }
            </Grid>
        </Fragment>
    );
};
