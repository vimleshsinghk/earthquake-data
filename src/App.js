import React, { Component } from "react";
import "./App.css";
import FilterButton from "./components/filterButton";
import List from "./components/list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      mag: "",
      magType: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handeleChange = this.handeleChange.bind(this);
  }

  handleClick(e) {
    const newState = Object.assign({}, this.state);
    const url =
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let list = data.features;
        newState.list = list.filter(
          val => String(val.properties[e]) === String(this.state[e])
        );
        if (!this.state.mag && !this.state.magType) return this.setState({list});
        this.setState(newState);
      });
  }
  handeleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    const url =
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.features);
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
          handleChange={this.handeleChange}
        />
        <FilterButton
          name="magType"
          btnName="filter by magType"
          handleClick={() => this.handleClick("magType")}
          value={this.state.magType}
          handleChange={this.handeleChange}
        />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
