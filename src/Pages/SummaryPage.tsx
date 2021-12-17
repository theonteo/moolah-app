import React from "react";
import SummaryCard from "../Components/SummaryCard";
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default class SummaryPage extends React.Component
{
     themeDark = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    render()
    {
        return (
            <div>
                 <ThemeProvider theme={this.themeDark}>
                <SummaryCard
                    budgetType=" Essentials "
                    budgetValue={1}
                    savingsGoal={1}
                    repeatGoal = {true}>
                </SummaryCard>
                </ThemeProvider>
            </div>
        );
    }
}