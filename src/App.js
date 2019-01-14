import React, { Component } from "react";
import "./App.css";
import FilterButton from "./components/filterButton";
import List from "./components/list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log("handleClick", e);
    const newState = Object.assign({}, this.state);
    console.log(newState.list);
    newState.list.sort((a, b) => {
      if (typeof a.properties[e] === "number") {
        return a.properties[e] - b.properties[e];
      } else {
        let x = a.properties[e].toLowerCase();
        let y = b.properties[e].toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      }
    });
    this.setState(newState);
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
          name="magnitude"
          btnName="filter by magnitude"
          handleClick={() => this.handleClick("mag")}
        />
        <FilterButton
          name="magType"
          btnName="filter by magType"
          handleClick={() => this.handleClick("magType")}
        />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
