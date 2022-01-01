import React from "react";
import SummaryCard from "../Components/SummaryCard";
import { ThemeProvider } from '@mui/material/styles';
import { themeDark } from "../Theme/Theme";

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

export default class InformationPage extends React.Component
{
    render()
    {
        return (
            <div>
                <ThemeProvider theme={themeDark}>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Typography variant="h4" component="h1"
                            gutterBottom fontFamily='jost' fontWeight='bold'>
                            See your budgets!
                        </Typography>
                        <SummaryCard
                            budgetType=" Essentials "
                            budgetValue={1}
                            savingsGoal={1}
                            repeatGoal={true}
                            result={true}
                            InputChangeSetBudgetTypeEvent={null}
                            InputChangeSetBudgetValueEvent={null}
                            InputChangeSetSavingsGoalEvent={null}>
                        </SummaryCard>

                        <Link to="/">
                            <Button variant="text">Back to Home</Button>
                        </Link>
                    </Grid>
                </ThemeProvider>
            </div>
        );
    }
}