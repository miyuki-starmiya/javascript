import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      input: '',
      tweets: ['I love "school rumble"'],
    };
  }

  incr(e) {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1
    })
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
      tweets: this.state.tweets,
    })
  }

  handleSubmit(e) {
    // e.preventDefault();
    this.setState({
      input: '',
      tweets: [...this.state.tweets, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.incr.bind(this)}>incr</button>
        <input type="text" placeholder="please tweet" onChange={this.handleChange.bind(this)} />
        <input type="submit" onClick={this.handleSubmit.bind(this)} />
        <h3>{this.state.count}</h3>
        {this.state.tweets.map((e, i) => {
          return <h5 key={i}>{e}</h5>
        })}
      </div>
    )
  }
}

