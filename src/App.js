import React, { Component } from 'react';
import {Header} from "./components/Header";
import {TimeBox} from "./components/TimeBox";
import {ArrivalSection} from "./components/ArrivalSection";
import {refineRoutes} from "./routes";
import './resources/css/style.css';
import {Tile} from "./components/Tile";

class App extends Component {
  state = {
    refinedRoutes: []
  };

  makeFunctionForCallback() {
    return (routesResult) => this.setState({ refinedRoutes: refineRoutes(routesResult.routes) });
  }

  async componentDidMount() {
    this.getRawRoutes(this.makeFunctionForCallback());
  }

  getRawRoutes = functionForCallback => {
    const transitOptions = {
      departureTime: new Date(Date.now()),
      modes: ['TRAM'],
    };
    const directionsRequest = {
      /*eslint-disable no-undef*/
      origin: new google.maps.LatLng(41.965581, -87.6612554), // LatLng | String | google.maps.Place,
      /*eslint-disable no-undef*/
      destination: new google.maps.LatLng(41.895943, -87.645888), // LatLng | String | google.maps.Place,
      travelMode: 'TRANSIT',
      transitOptions: transitOptions,
      /*eslint-disable no-undef*/
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      provideRouteAlternatives: true,
      avoidFerries: false,
    };
    /*eslint-disable no-undef*/
    const directionsService = new google.maps.DirectionsService;

    /*eslint-disable no-undef*/
    directionsService.route(directionsRequest, function (result, status) {
      functionForCallback(result);
    });
  };

  render() {
    return (
      <div>
        <Header/>
        <div className="mainbody">
          <ArrivalSection routes={this.state.refinedRoutes} />
          <TimeBox/>
        </div>
      </div>
    );
  }
}

export default App;
