import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class Navbar extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        React Weather App
            </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar;