import * as React from 'react';
import MainCard from "./Components/mainCard/mainCard";
import WeatherOutput from "./Components/weatherOutput/weatherOutput";
import './App.css';
import { Typography } from '@material-ui/core';

interface mainState {
    weatherCity: undefined | string,
    weatherCountry: undefined | string,
    cityTemperature: undefined | number,
    cityConditions: undefined | string,
    cityHumidity: undefined | number,
    handleError: undefined | string
}

class App extends React.Component<{}, mainState> {
    constructor(props: any) {
        super(props);
        this.state = {
          weatherCity: undefined,
          weatherCountry: undefined,
          cityTemperature: undefined,
          cityConditions: undefined,
          cityHumidity: undefined,
          handleError: undefined
        }
        this.weatherFetch = this.weatherFetch.bind(this);
    };

    private async weatherFetch(e:any) {
        e.preventDefault();
        const weatherCity = e.target.elements.city.value;
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + weatherCity + '&appid='+ process.env.REACT_APP_API_KEY +'&units=metric');
        const jsonResponse = await api_call.json();
        if (weatherCity && jsonResponse.message !== "city not found") {
            this.setState({
              weatherCity: jsonResponse.name,
                weatherCountry: jsonResponse.sys.country,
                cityTemperature: jsonResponse.main.temp,
                cityConditions: jsonResponse.weather[0].description,
                cityHumidity: jsonResponse.main.humidity,
                handleError: ""
            });
        } else {
            this.setState({
              weatherCity: undefined,
              weatherCountry: undefined,
              cityTemperature: undefined,
              cityConditions: undefined,
              cityHumidity: undefined,
              handleError: "  Please, enter a valid city."
            });
        }
    }

    render() {
        return (
            <div className="wholebox">
              <Typography className="h1">Hows the weather looking?</Typography>
                <div className="box">
                  <Typography className="subHead">Discover the temperature and conditions in cities around the world at:</Typography>
                  <MainCard weatherFetch={this.weatherFetch}/>
                  <WeatherOutput
                      weatherCity={this.state.weatherCity}
                      weatherCountry={this.state.weatherCountry}
                      cityTemperature={this.state.cityTemperature}
                      cityConditions={this.state.cityConditions}
                      cityHumidity={this.state.cityHumidity}
                      handleError={this.state.handleError}
                      />
                  </div>
                  <Typography className="h4">Made with love by Parth</Typography>
            </div>
        );
    }
};

export default App;



