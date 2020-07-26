import * as React from "react";
import { Button, TextField, Typography } from '@material-ui/core';
import './mainCard.css';

interface formProp {
    weatherFetch: (e: any) => Promise<any>
}

class mainCard extends React.Component<formProp> {
    render() {
        const currentDate = new Date()
        return (
            <form onSubmit={this.props.weatherFetch}>
                <span className="test">{ `${currentDate.toLocaleDateString()} - ${currentDate.toLocaleTimeString()}`}</span>
                <TextField className="textt" color="secondary" type="text" name="city" label="Please enter a city" variant="filled"/>
                <Typography></Typography>
                <Button className="button" variant="contained" color="default" type="submit">Display Weather</Button>
            </form>
        );
    }
}

export default mainCard;