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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import  '../Theme/Theme';
import { themeDark, themeLight } from '../Theme/Theme';

export default class Home extends React.Component
{
    render()
    {
        return (
            <>
                <ThemeProvider theme={themeDark}>
                    <Card style={{ borderRadius: '0px' }} sx={{ minWidth: 275 }}>
                        <CardContent>

                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                style={{ height: '60vh' }}
                            >
                                <Box color='black'>
                                    <Typography align="center" variant="h2" component="h1"
                                        gutterBottom fontFamily='jost' fontWeight='light' color='white'>
                                        MOOLAH
                                    </Typography>
                                    <Typography align="center" variant="body1" component="h1"
                                        gutterBottom fontFamily='jost' fontWeight='light' color='white'>
                                        TAKE CONTROL OF YOUR SPENDING MONEY
                                    </Typography>
                                </Box>
                            </Grid>
                        </CardContent>
                    </Card>
                    <ThemeProvider theme={themeLight}>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{ height: '30vh' }}
                        >
                            <Typography variant="h4" component="h1"
                                gutterBottom fontFamily='jost' fontWeight='bold'>
                                Mindful Spending
                            </Typography>
                            <Typography gutterBottom>
                                Never miss another dollar again
                            </Typography>
                            <Link href="/Instructions">
                                <Button variant="contained"> Lets Get Started</Button>
                            </Link>
                        </Grid>
                    </ThemeProvider>
                </ThemeProvider>
            </>
        );
    }
}