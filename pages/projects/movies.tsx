import { FormControl, Input, InputAdornment, InputLabel, makeStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useState } from 'react';
import { Meta, MovieItem } from '../../components/atoms';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiInputBase-input': {
            marginLeft: theme.spacing(2),
        },
    },
    input: {
        '& .MuiInputBase-input': {
            marginLeft: theme.spacing(2),
            color: theme.palette.secondary.main,
        },
    },
}));

type movieItem = {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string,
}

interface MovieProps {
    isDark: boolean
}

const Movie = ({ isDark }: MovieProps) => {
    const classes = useStyles();
    const [keyword, setKeyword] = useState<string>('');
    const [movies, setMovies] = useState<movieItem[]>([]);

    const fetchAPI = async (search: string) => {
        const result = await fetch(`https://www.omdbapi.com/?apikey=ede299a&type=movie&s=${search}`);
        // const result = await fetch('http://localhost:3000/api/movies');
        const data = await result.json();
        if (data.Error) return setMovies([]);
        setMovies(data.Search);
        // setMovies(data);
    };

    return (
        <>
            <Meta title="My Projects | Movie" />
            <div className="pt-16 lg:pt-24 w-4/5 mx-auto">
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="input-with-icon-adornment">Search Your Movie</InputLabel>
                    <Input
                        className={isDark ? classes.input : classes.root}
                        value={keyword}
                        onChange={({ target }) => { setKeyword(target.value); fetchAPI(target.value); }}
                        autoFocus
                        id="input-with-icon-adornment"
                        startAdornment={(
                            <InputAdornment position="end">
                                <Search />
                            </InputAdornment>
                        )}
                    />
                </FormControl>
                <div className="pt-5 pb-10 max-w-md mx-auto md:mx-0 md:max-w-none grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {movies.map(({ Title, Poster, Year, imdbID }) => (
                        <MovieItem
                            key={imdbID}
                            title={Title}
                            poster={Poster}
                            year={Year}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Movie;
