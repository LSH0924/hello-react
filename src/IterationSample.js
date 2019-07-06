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

  handleRemove = index => {
    const { seasons } = this.state;
    this.setState({
      seasons: [
        // index 0번부터 index앞까지
        ...seasons.slice(0, index),
        // index+1번부터 배열의 맨 끝까지
        ...seasons.slice(index + 1, seasons.length)
      ]
    });
  };

  render() {
    const { seasons } = this.state;
    const seasonList = seasons.map((season, index) => (
      <li key={index} onDoubleClick={() => this.handleRemove(index)}>
        {season}
      </li>
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
