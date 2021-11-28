/*****************************************************************************/
/*!
\file Home.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


export const Copyright : React.FC = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default class Home extends React.Component
{
    render()
    {
        return (
            <>
                <Container maxWidth="sm">
                    <Box sx={{ my: 4 }}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Create React App v5 example
                        </Typography>
                        <Copyright />
                    </Box>
                </Container>
            </>
        );
    }
}