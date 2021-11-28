import React from "react";
import SummaryCard from "../Components/SummaryCard";

export default class SummaryPage extends React.Component
{
    render()
    {
        return (
            <div>
                <SummaryCard
                    budgetType=" Essentials "
                    budgetValue={1}
                    savingsGoal={1}
                    repeatGoal = {true}>
                </SummaryCard>
            </div>
        );
    }
}