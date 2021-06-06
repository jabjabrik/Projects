import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogControl from '../molecules/DialogControl';

type MovieItemProps = {
    title: string,
    year: string,
    poster: string,
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const MovieItem = ({ title, year, poster }: MovieItemProps) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div>
                <div onClick={() => setOpen(true)} className="dark:bg-gray-700 dark:hover:bg-gray-600 transition cursor-pointer hover:bg-gray-200 hover:shadow-xl duration-200 rounded overflow-hidden shadow-lg">
                    <img className="w-full h-36 object-cover object-center" src={poster} alt={title} />
                    <div className="px-6 py-4">
                        <h3 className="transition dark:text-gray-200 text-2xl mb-2">{title}</h3>
                        <p className="transition text-gray-700 dark:text-gray-300 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores etperferendis eaque, exercitationem praesentium nihil.</p>
                    </div>
                </div>
            </div>
            <DialogControl
                open={open}
                setOpen={setOpen}
                title={title}
                year={year}
                poster={poster}
            />
        </>
    );
};

export default MovieItem;
