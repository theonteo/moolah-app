
import React from "react";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { color } from "@mui/system";


interface props
{
    budgetType: string;
    budgetValue: Number;
    savingsGoal: Number;
}

const SummaryCard: React.FC<props> = () =>
{
    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    }));



    return (
        <Box>

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
           
                <Grid style={{ width: '40vw'} } container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography color="inherit">Budget Type:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-required"
                            label="Enter Budget tag here"
                            defaultValue="Essentials"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">Budget:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                            id="standard-required"
                            label="Enter Budget here"
                            defaultValue="0"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>Savings goal:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                            id="standard-required"
                            label="Enter savings goal here"
                            defaultValue="0"
                            variant="standard"
                        />
                    </Grid>
                </Grid>
               
            <Typography variant="h4" component="h1" gutterBottom>
                Budget Type
            </Typography>
        </Grid >
        </Box>
    );
};

export default SummaryCard;
