import React from "react";
import { Grid, Typography } from "@mui/material";

export default class InstructionsPage extends React.Component
{

     stringArr :string[] =  ["text1", "text2"];



    render()
    {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >

                {this.stringArr.map( (str:string) => {
                    <Typography>
                            {str}
                    </Typography>
                })}

            <Typography>
                
            </Typography>
            </Grid>
        );
    }
}