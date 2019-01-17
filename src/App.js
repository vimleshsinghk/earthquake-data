import React, { Component } from "react";
import "./App.css";
import FilterButton from "./components/filterButton";
import ListData from "./components/listData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      mag: "",
      magType: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    const newState = Object.assign({}, this.state);
    const url =
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let list = data.features;
        newState.list = list.filter(val => {
          if (String(this.state.magType) && String(this.state.mag)) {
            return (
              String(val.properties.magType) === String(this.state.magType) &&
              String(val.properties.mag) === String(this.state.mag)
            );
          } else if (String(this.state.magType)) {
            return (
              String(val.properties.magType) === String(this.state.magType)
            );
          } else if (String(this.state.mag)) {
            return (String(val.properties.mag) === String(this.state.mag));
          } else {
            return true;
          }
        });
        this.setState(newState);
      });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    const url =
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ list: data.features });
      });
  }

  render() {
    return (
      <div className="App">
        <FilterButton
          name="mag"
          btnName="filter by magnitude"
          handleClick={() => this.handleClick("mag")}
          value={this.state.mag}
          handleChange={this.handleChange}
        />
        <FilterButton
          name="magType"
          btnName="filter by magType"
          handleClick={() => this.handleClick("magType")}
          value={this.state.magType}
          handleChange={this.handleChange}
        />
        <ListData list={this.state.list} />
      </div>
    );
  }
}

export default App;
