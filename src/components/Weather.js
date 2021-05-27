// 1.When a city search successfully returns `lat` and `lon` info,
//  immediately create a new request (lat/lon included) to your server's `/weather` endpoint.
//2. Create a new `Weather.js` component to render forecast data to the page.
// 3.When the server returns the array of forecast data, 
// show the Weather component, populated with the server data.
// 4.Use appropriate Bootstrap components to nicely display the forecast data.
// 5.In the event of your API sending an error code, show a well-formatted error to the users.

import React from 'react';
class Weather extends React.Component {
  render() {
    return (
      this.props.weatherData.map(item => {
        return (
          <>
            <p> Date:<span>{item.date} </span> <br />
            Description:<span>{item.description}</span></p>
          </>
        );
      })
    );
  }
}
export default Weather;