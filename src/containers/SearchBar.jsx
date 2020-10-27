import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../redux/actions/weatherActions";

function SearchBar({ getWeather }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(term);
    setTerm("");
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="ui fluid action input">
          <input
            type="text"
            name="term"
            value={term}
            placeholder="Get a five-day forecast in your favorite cities"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit" className="ui button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getWeather: (city) => dispatch(fetchWeather(city)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
