import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ValidationForm from "./ValidationForm";
export default class Layout extends React.Component {
  render() {
    var myArr = [
      "Taras Buchynskyi",
      "Azik Mazik",
      "Petya Loh",
      "Orif Bobohonov"
    ];
    return (
      <div>
        <section>
          <Header header="My Group" />
        </section>
        <div>
          {myArr.map(arr => (
            <li>{arr}</li>
          ))}
        </div>
        <section>
          <ValidationForm />
        </section>
        <div>
          <Footer footer={this.props.home} />
        </div>
      </div>
    );
  }
}
