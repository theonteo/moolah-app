/*****************************************************************************/
/*!
\file Dashboard.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from 'react';
import '../Global.css';

import { Button } from '../Components/Interaction/Button';

function Home()
{
    return (
        <>
            <div className="Home-Container">
                <div className="Home-Board">
                    <div className="Home-Background">

                    </div>
                    <div className="Home-Logo">

                    </div>
                </div>
                <div className="Home-Title">
                    <div className="Global-Heading">
                        Mindful spending.
                    </div>
                    <div className="Global-Text">
                        Never miss another dollar again.
                    </div>
                    <div className="Home-Button">
                        <Button >Lets get started </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;