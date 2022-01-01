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

interface props
{
    budgetType: string;
    budgetValue: Number;
    savingsGoal: Number;
    repeatGoal: Boolean;
    result: Boolean;
}
const summaryProps: props =
{
    budgetType: "Essentials",
    budgetValue: 0,
    savingsGoal: 0,
    repeatGoal: false,
    result: false
};
export const SummaryPage: React.FC = () =>
{


    const [mbudgetType, setBudgetType] = React.useState<string>(summaryProps.budgetType);
    const [mbudgetValue, setBudgetValue] = React.useState<Number>(summaryProps.budgetValue);
    const [msavingsGoal, setSavingsGoal] = React.useState<Number>(summaryProps.savingsGoal);

    const InputChangeSetBudgetType = (event: any) =>
    {
        setBudgetType(event.target.value);
        summaryProps.budgetType = mbudgetType;
    };
    const InputChangeSetBudgetValue = (event: any) =>
    {
        setBudgetValue(event.target.value);
        summaryProps.budgetValue = mbudgetValue;
    };
    const InputChangeSetSavingsGoal = (event: any) =>
    {
        setSavingsGoal(event.target.value);
        summaryProps.savingsGoal = msavingsGoal;
    };

    //on button press - send to server
    const sendToServer = () =>
    {
        //TODO: should be done using env
        console.log("posting", summaryProps);
        Axios.post(`https://moolah-app-backend.herokuapp.com/budgets`, {
            budget_type: summaryProps.budgetType,
            budget_amount: summaryProps.budgetValue,
            saving_goal: summaryProps.savingsGoal,
            repeat_budget: summaryProps.repeatGoal
        }).then(response =>
        {
            console.log(response)
        });
    }

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
                        budgetType={summaryProps.budgetType}
                        budgetValue={summaryProps.budgetValue}
                        savingsGoal={summaryProps.savingsGoal}
                        repeatGoal={summaryProps.repeatGoal}
                        result={summaryProps.result}

                        InputChangeSetBudgetTypeEvent={InputChangeSetBudgetType}
                        InputChangeSetBudgetValueEvent={InputChangeSetBudgetValue}
                        InputChangeSetSavingsGoalEvent={InputChangeSetSavingsGoal}
                    >
                    </SummaryCard>

                    <Box m={1} pt={2}>
                        <Button variant="contained" onClick={sendToServer}>I'm all set!</Button>
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

export default SummaryPage;