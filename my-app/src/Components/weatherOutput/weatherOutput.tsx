import * as React from "react";
import './weatherOutput.css';
import { Typography } from "@material-ui/core";


interface weatherProp {
    weatherCity: undefined | string,
    weatherCountry: undefined | string,
    cityTemperature: undefined | number,
    cityConditions: undefined | string,
    cityHumidity: undefined | number,
    handleError: undefined | string
}

class weatherOutput extends React.Component<weatherProp> {
    render() {
        return (
            <div>
                {this.props.weatherCity && <Typography className="descript">The weather in <span className="bolder">{this.props.weatherCity}, {this.props.weatherCountry}</span> is currently <span className="bolder">{this.props.cityTemperature}</span> degrees celsius and is being described as: <span className="bolder">{this.props.cityConditions}. </span> Humidity levels are at <span className="bolder">{this.props.cityHumidity}%</span></Typography>}
                {this.props.handleError && <Typography className="descript">Error:{this.props.handleError}</Typography>}
            </div>
        );
    }
};

export default weatherOutput;