
import React from "react";

import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import '../Global.css'
import { SummaryPage } from "../Pages/SummaryPage";

interface props {
    budgetType: string;
    budgetValue: Number;
    savingsGoal: Number;
    repeatGoal: Boolean;
    result: Boolean;
}
const SummaryCard: React.FC<props> =
    ({ budgetType, budgetValue, savingsGoal, repeatGoal, result }: props) =>
    {
        
        //use states
        

        const renderBudgetType = () =>
        {
            if (!result)
            {
                return (
                    <TextField
                        id="standard-required"
                        label="Enter Budget tag here"
                        variant="standard"
                        value={budgetType}
                        //onChange={InputChangeSetBudgetType}
                    />)
            } else
            {
                return (<Typography>{budgetType}</Typography>)
            }
        }
        const renderBudget = () =>
        {
            if (!result)
            {
                return (
                    <TextField
                        id="standard-required"
                        label="Enter Budget here"
                        value={budgetValue}
                        variant="standard"
                        type="number"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                       // onChange={InputChangeSetBudgetValue}
                    />)
            } else
            {
                return (<Typography>{budgetValue}</Typography>)
            }
        }
        const renderSavingsGoal = () =>
        {
            if (!result)
            {
                return (<TextField
                    id="standard-required"
                    label="Enter savings goal here"
                    value={savingsGoal}
                    variant="standard"
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    //onChange={InputChangeSetSavingsGoal}
                />)
            } else
            {
                return (<Typography>{savingsGoal}</Typography>)
            }
        }

        const renderBudgetCheckBox = () =>
        {
            if (!result)
            {
                return (
                    <FormControlLabel control={<Checkbox defaultChecked />}
                        label="Repeat this budget every month?" />)
            } else
            {

            }
        }

        return (
            <>
                <Card >
                    <CardContent>
                        <Grid style={{
                            alignItems: "center",
                            justifyContent: "center",
                            padding: '20px',
                            width: '60vw'
                        }}
                            container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Typography color="inherit">Budget Type:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                {renderBudgetType()}
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">Budget:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                {renderBudget()}
                            </Grid>
                            <Grid item xs={6}>
                                <Typography>Savings goal:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                {renderSavingsGoal()}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                {renderBudgetCheckBox()}
            </>
        );
    };

export default SummaryCard;
