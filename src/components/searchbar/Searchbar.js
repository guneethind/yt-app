import React from "react";
import "./searchbar.css";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "" };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.inputVal);
    this.props.onSubmit(this.state.inputVal);
  };

  timer;

  onInputChange = (e) => {
    clearTimeout(this.timer);
    this.setState({ inputVal: e.target.value });

    this.timer = setTimeout(() => {
      this.props.onSubmit(this.state.inputVal);
    }, 500);

    // console.log(e.target.value);
  };

  render() {
    return (
      <div className="searchbarContainer">
        <form onSubmit={this.onFormSubmit}>
          <label>Search</label>
          <input
            type="text"
            value={this.state.inputVal}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
