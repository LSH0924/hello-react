import React, { Component } from "react";

class IterationSample extends Component {
  state = {
    seasons: ["봄"],
    season: ""
  };

  handleInputChange = e => {
    this.setState({
      season: e.target.value
    });
  };

  handleButtonAdd = () => {
    const { seasons, season } = this.state;
    this.setState({
      seasons: seasons.concat(season),
      season: ""
    });
  };

  render() {
    const { seasons } = this.state;
    const seasonList = seasons.map((season, index) => (
      <li key={index}>{season}</li>
    ));

    return (
      <div>
        <h2>사계절</h2>
        <ul>{seasonList}</ul>
        <div>
          <input
            type="text"
            name="season"
            value={this.state.season}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonAdd}>계절 추가하기</button>
        </div>
      </div>
    );
  }
}

export default IterationSample;