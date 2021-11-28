
import React from "react";

import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import '../Global.css'

interface props
{
    budgetType: string;
    budgetValue: Number;
    savingsGoal: Number;
    repeatGoal: Boolean;
}

const SummaryCard: React.FC<props> = () =>
{
    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    }));

    //use states
    const [budgetType, setBudgetType] = React.useState<String>("Food");
    const [budgetValue, setBudgetValue] = React.useState<Number>(0);
    const [savingsGoal, setSavingsGoal] = React.useState<Number>(0);
    const [repeatGoal, setRepeatGoal] = React.useState<Boolean>(true);


    const InputChangeSetBudgetType = (event: any) => { setBudgetType(event.target.value); };
    const InputChangeSetBudgetValue = (event: any) => { setBudgetValue(event.target.value); };
    const InputChangeSetSavingsGoal = (event: any) => { setSavingsGoal(event.target.value); };

    return (
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
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Grid style={{
                        alignItems: "center",
                        justifyContent: "center",
                        padding: '20px',
                        width: '40vw'
                    }}
                        container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Typography color="inherit">Budget Type:</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField

                                id="standard-required"
                                label="Enter Budget tag here"
                                defaultValue={budgetType}
                                variant="standard"
                                value={budgetType}
                                onChange={InputChangeSetBudgetType}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">Budget:</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="standard-required"
                                label="Enter Budget here"
                                defaultValue={budgetValue}
                                variant="standard"
                                onChange={InputChangeSetBudgetValue}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Savings goal:</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="standard-required"
                                label="Enter savings goal here"
                                defaultValue={savingsGoal}
                                variant="standard"
                                onChange={InputChangeSetSavingsGoal}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <FormControlLabel control={<Checkbox defaultChecked />}
                label="Repeat this budget every month?" />
            <Box m={1} pt={2}>
                <Button variant="contained">I'm all set!</Button>
            </Box>
            <Link to="/">
                <Button variant="text" >Back</Button>
            </Link>
        </Grid>


    );
};

export default SummaryCard;
