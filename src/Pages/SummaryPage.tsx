import React from "react";
import SummaryCard from "../Components/SummaryCard";
import { ThemeProvider } from '@mui/material/styles';
import { themeDark } from "../Theme/Theme";

import { Link } from 'react-router-dom';
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

import Axios from "axios";

interface props {
    budgetType: string;
    budgetValue: Number;
    savingsGoal: Number;
    repeatGoal: Boolean;
    result: Boolean;
}

export default class SummaryPage extends React.Component {

    private summaryProps: props =
        {
            budgetType: "Essentials",
            budgetValue: 0,
            savingsGoal: 0,
            repeatGoal: false,
            result: false
        };


    //on button press - send to server
    sendToServer = () => {
        //TODO: should be done using env
        console.log("posting", this.summaryProps);
        Axios.post(`https://moolah-app-backend.herokuapp.com/budgets`, {
            budget_type: this.summaryProps.budgetType,
            budget_amount: this.summaryProps.budgetValue,
            saving_goal: this.summaryProps.savingsGoal,
            repeat_budget: this.summaryProps.repeatGoal
        }).then(response => {
            console.log(response)
        });

    }
    render() {
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
                            One Last Thing...
                        </Typography>
                        <SummaryCard
                            budgetType={this.summaryProps.budgetType}
                            budgetValue={this.summaryProps.budgetValue}
                            savingsGoal={this.summaryProps.savingsGoal}
                            repeatGoal={this.summaryProps.repeatGoal}
                            result={this.summaryProps.result}>
                        </SummaryCard>

                        <Box m={1} pt={2}>
                            <Button variant="contained" onClick={this.sendToServer}>I'm all set!</Button>
                        </Box>
                        <Link to="/">
                            <Button variant="text">Back to Home</Button>
                        </Link>
                        <Link to="/Information">
                            <Button variant="text">See information</Button>
                        </Link>
                    </Grid>
                </ThemeProvider>
            </div>
        );
    }
}