/*****************************************************************************/
/*!
\file Home.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid } from "@mui/material";
import { Button } from '@mui/material';
export const Copyright: React.FC = () =>
{
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
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Typography variant="h2" component="h1"
                gutterBottom fontFamily='jost' fontWeight='bold'>
                        Moolah
                    </Typography>

                    <Typography variant="h4" component="h1"
                gutterBottom fontFamily='jost' fontWeight='bold'>
                        Mindful Spending
                    </Typography>
                    <Typography gutterBottom>
                        Never miss another dollar again
                    </Typography>
                    <Link  href="/Summary">
                        <Button variant="contained"> Lets Get Started</Button>
                    </Link>
                    <Copyright />
                </Grid>

            </>
        );
    }
}