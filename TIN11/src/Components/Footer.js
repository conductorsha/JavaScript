import React from "react";
export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1 id="footer">Home: {this.props.home}</h1>
      </div>
    );
  }
}
