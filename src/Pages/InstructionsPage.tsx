import React from "react";
import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory } from 'react-router-dom';

interface InstructionGroup
{
    title: string;
    instruction: string;
}

export const InstructionsPage: React.FC = () =>
{
    var InstructionGroup: InstructionGroup[] = [
        { "title": "Spend within budget", "instruction": "Set your monthly budget and see how well you manage your expendatures!" },
        { "title": "Make it a habit.", "instruction": "Keep track of all your purchases in one simple app." },
        { "title": "No Diggity.", "instruction": "Monthly analysis to see where your money goes and see how much you can save instead." }
    ];
    const [pageValue, setPageValue] = React.useState(0);
    let history = useHistory();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Typography variant="h4" component="h1" fontFamily='jost' fontWeight = "bold">
                {InstructionGroup[pageValue].title}
            </Typography>
            <Typography style={{width :'80%' ,paddingBottom:'20%'}} variant="body1" component="h1">
                {InstructionGroup[pageValue].instruction}
            </Typography>

            <Button style = {{width:'60%'}} variant= "contained" onClick={() =>
            {
                setPageValue(pageValue + 1);

                if (pageValue >= (InstructionGroup.length - 1))
                    history.push('/Summary')
                
            }
            } >
                Next
            </Button>

        </Grid>
    );
}

export default InstructionsPage;