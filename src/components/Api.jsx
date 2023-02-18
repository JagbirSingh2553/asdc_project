import React from 'react';
// import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import Dropdown from './Elements/Dropdown/dropdown';
// import Button from 'react-bootstrap/Button';
import "./api.css";

class Api extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state={

    //     }
    // }
    render() {
          
        
        const paperstyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
        return (
            <Container>
                <Paper elevation={3} style={paperstyle}>
                    <h1>API Tester</h1>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                       <div className='api-textfield'>
                        <TextField  label="API Link" variant="outlined" 
                        />
                        </div>
                        <Dropdown 
                        // selected={selected} setSelected={setSelected}
                        />
                       <Button variant="outlined">Outlined</Button>

                        <TextField id="outlined-basic" label="Payload" variant="outlined" 
                        inputProps={{
                            style:{
                                height:"200px",
                            },
                        }}
            /> 
            <TextField id="outlined-basic" label="output" variant="outlined" 
            inputProps={{
                style:{
                    height:"200px",
                },
            }}
/>
                    </Box>
                </Paper>
            </Container>
        )
    }
}
export default Api;