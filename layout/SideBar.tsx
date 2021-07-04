import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, ListItemText, ListItemIcon, ListItem, Divider, List, SwipeableDrawer } from '@material-ui/core';
import { Menu, Extension, Web, PersonPin, Person, PersonAdd } from '@material-ui/icons';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const SideBar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();

    return (
        <div className="lg:hidden mr-4">
            <IconButton edge="start" color="secondary" aria-label="menu" className="focus:outline-none" onClick={() => setOpen(true)}>
                <Menu />
            </IconButton>

            <SwipeableDrawer open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
                <div className={classes.list}>
                    <List>
                        {[{ category: 'Projects', icon: <Extension /> }, { category: 'Technology', icon: <Web /> }, { category: 'About', icon: <PersonPin /> }].map(({ category, icon }) => (
                            <ListItem button onClick={() => router.push(`/${category.toString().toLowerCase()}`)} key={category}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={category} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {[{ category: 'Sign in', icon: <Person /> }, { category: 'Sign up', icon: <PersonAdd /> }].map(({ category, icon }) => (
                            <ListItem button key={category}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={category} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </SwipeableDrawer>
        </div>
    );
};

export default SideBar;
