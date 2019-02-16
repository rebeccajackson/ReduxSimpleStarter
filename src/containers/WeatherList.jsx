import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const{ lon, lat } = cityData.city.coord

    console.log(name, temps)
    return (
      <tr key={name}>
        <td> <GoogleMap lon={lon} lat={lat} /> </td>
        <td> <Chart data={temps} units='K' color='orange'/> </td>
        <td> <Chart data={pressures} units='hPa' color='green'/> </td>
        <td> <Chart data={humidities} units='%' color='blue'/> </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)