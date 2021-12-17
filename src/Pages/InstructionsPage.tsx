import React from "react";
import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

interface InstructionGroup
{
    title: string;
    instruction: string;
}

export const InstructionsPage: React.FC = () =>
{
    const themeDark = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    var InstructionGroup: InstructionGroup[] = [
        { "title": "Spend within budget", "instruction": "Set your monthly budget and see how well you manage your expendatures!" },
        { "title": "Make it a habit.", "instruction": "Keep track of all your purchases in one simple app." },
        { "title": "No Diggity.", "instruction": "Monthly analysis to see where your money goes and see how much you can save instead." }
    ];
    const [pageValue, setPageValue] = React.useState(0);
    let history = useHistory();

    let pg = 0;

    const inc = () =>
    {
        pg++;
    };

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
                            style={{ height: '20vh' }}
                        >
                            <Box color='black'>
                                <Typography align="center" variant="h4" component="h1"
                                    gutterBottom fontFamily='jost' fontWeight='bold' color='white'>
                                    STEP {pageValue + 1}.
                                </Typography>
                            </Box>
                        </Grid>
                    </CardContent>
                </Card>
            </ThemeProvider>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '70vh' }}
            >
                <Typography variant="h4" component="h1" fontFamily='jost' fontWeight="bold">
                    {InstructionGroup[pageValue].title}
                </Typography>
                <Typography style={{ width: '80%', paddingBottom: '20%' }} align='center' variant="body1" component="h1">
                    {InstructionGroup[pageValue].instruction}
                </Typography>

                <div>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        style={{ paddingBottom: "50px" }}
                    >
                        {
                            InstructionGroup.map(() =>
                                <div>
                                    {
                                        <Card sx={{
                                            margin: '3px',
                                            width: (pg === pageValue) ? 15 : 10,
                                            height: 10,
                                            backgroundColor: 'primary.dark',
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}>
                                        </Card>
                                    }
                                    {inc()}
                                </div>
                            )
                        }
                    </Grid>
                </div>


                <Button style={{ width: '60%' }} variant="contained" onClick={() =>
                {
                    setPageValue(pageValue + 1);

                    if (pageValue >= (InstructionGroup.length - 1))
                        history.push('/Summary')

                }
                } >
                    Next
                </Button>

            </Grid>
        </>
    );
}

export default InstructionsPage;