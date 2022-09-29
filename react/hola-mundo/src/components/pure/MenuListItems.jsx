import React from 'react';
import {List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {HomeIcon, SettingsIcon} from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<HomeIcon/>)
        case 'TASKS':
            return (<HomeIcon/>)
        case 'SETTINGS':
            return (<SettingsIcon/>)
        default:
            return (<HomeIcon/>);
    }
}


const MenuListItems = ({list}) => {

    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    }

    return (
        <List>
            {
                list.map(({text, path, icon}, index) => 
                
                (
                    <ListItemButton
                        key={index}
                        onClick={() => navigateTo(path)}
                    >
                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItemButton>
                )
                
            )}
        </List>
    );
}

export default MenuListItems;
