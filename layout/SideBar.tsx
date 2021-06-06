import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton } from '@material-ui/core';
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

export default function SideBar() {
    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter()

    return (
        <div className="lg:hidden mr-4">
            <IconButton edge="start" color="secondary" aria-label="menu" className="focus:outline-none" onClick={() => setOpen(true)}>
                <Menu />
            </IconButton>

            <SwipeableDrawer
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <div className={classes.list}>
                    <List>
                        {[[<Extension />, 'Projects'], [<Web />, 'Technology'], [<PersonPin />, 'About']].map(([icon, category], i) => (
                            <ListItem button onClick={() => router.push(`/${category.toString().toLowerCase()}`)} key={i}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={category} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {[['Sign in', <Person />], ['Sign up', <PersonAdd />]].map(([category, icon], i) => (
                            <ListItem button key={i}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={category} />
                            </ListItem>  
                        ))}
                    </List>
                </div>
            </SwipeableDrawer>
        </div>
    );
}
