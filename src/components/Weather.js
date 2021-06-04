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