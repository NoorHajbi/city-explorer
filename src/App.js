import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      citySearched: '',
      output: '',
      show: false,
      errorMessage: false,
      apiKey: `pk.b2d1d28fe6236b24f76b7d5f8e2403d6`
    }
  }

  getLocation = async (e) => {
    e.preventDefault();
    let LocUrl = `https://eu1.locationiq.com/v1/search.php?key=${this.state.apiKey} &q=${this.state.citySearched}&format=json`;

    try {
      let locResult = await axios.get(LocUrl);
      this.setState({
        output: locResult.data[0],
        show: true,
      })
      // console.log(this.state.output);
    }
    catch {
      this.setState({
        show: false,
        errorMessage: true
      })
    }
  }

  updateSearch = (event) => {
    this.setState({
      citySearched: event.target.value,
    })
    // console.log(this.state.citySearched);
  }
  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.getLocation}>
          <input type='text' placeholder='add a city' onChange={this.updateSearch} />
          <button value='Get Location'>Explore!</button>
        </form>

        { this.state.show &&
          <p>
            City:<span>{this.state.output.display_name}</span> <br />
          Lat / Long: <span>{this.state.output.lat}, {this.state.output.lon}</span></p>
        }

        { this.state.show &&
          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=${this.state.apiKey}&center=${this.state.output.lat},${this.state.output.lon}`} alt=''
          />
        }
        { this.state.errorMessage &&
          <p>
            "error": "Unable to geocode"
          </p>
        }
      </>
    )
  }
}

export default App;