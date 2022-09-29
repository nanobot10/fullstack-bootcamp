import React from 'react';

//Material UI Components
import { Typography, Link } from '@mui/material';

const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
            {'Copyright (C)'}
            <Link color='inherit' href='https://imaginaformacion.com'>
                Imagina Formación
            </Link>
            {''}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default Copyright;
