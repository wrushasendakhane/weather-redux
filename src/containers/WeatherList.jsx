import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Chart from "../components/Chart";
import GoogleMap from "../components/GoogleMap";

function WeatherList({ weather }) {
  const renderWeather = (cityData) => {
    console.log(cityData);
    const temps = _.map(cityData.list, "main.temp");
    const pressure = _.map(cityData.list, "main.pressure");
    const humidity = _.map(cityData.list, "main.humidity");
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          {temps && <Chart data={temps} color="orange" units="&#8451;" />}
        </td>
        <td>
          {pressure && <Chart data={pressure} color="green" units="hPa" />}
        </td>
        <td>{humidity && <Chart data={humidity} color="black" units="%" />}</td>
      </tr>
    );
  };
  return (
    <table className="ui mobile stackable table">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (&#8451;)</th>
          <th>Pressure(hPa)</th>
          <th>Humidity(%)</th>
        </tr>
      </thead>
      <tbody>{weather.map((item) => renderWeather(item))}</tbody>
    </table>
  );
}

const mapStateToProps = ({ weather }) => ({
  weather,
});

export default connect(mapStateToProps)(WeatherList);
