import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { Link, Element, scroller } from "react-scroll";

import { addNotes, updateNotes } from "./store/reducers/textInput";
class Home extends Component {
  state = {
    activeScrollIndex: ""
  };

  onChange = event => {
    const newValue = event.target.value;
    const notes = newValue.split(`\n`);
    this.props.updateNotes(notes);
  };

  scrollTo = name => event => {
    this.setState({ activeScrollIndex: name });
    scroller.scrollTo(name, {
      smooth: "easeInOutQuart"
    });
  };

  render() {
    const { inputReducer } = this.props;
    const inputValue = [...inputReducer.input.notes].join(`\n`);
    const { activeScrollIndex } = this.state;
    return (
      <div>
        <div style={{ margin: '20px 10px 120px 20px' }}>
          <TextField
            value={inputValue}
            onChange={this.onChange}
            multiline={true}
            onKeyDown={this.keyPress}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px auto",
            gridGap: 10,
            overflow: "hidden"
          }}
        >
          <div style={{ height: "100%", overflow: "hidden" }}>
            <div
              onClick={this.scrollTo("test1")}
              className={activeScrollIndex === "test1" ? "active" : ""}
            >
              Test 1
            </div>
            <div
              onClick={this.scrollTo("test2")}
              className={activeScrollIndex === "test2" ? "active" : ""}
            >
              Test 2 (delay)
            </div>
            <div
              onClick={this.scrollTo("test3")}
              className={activeScrollIndex === "test3" ? "active" : ""}
            >
              Test 6 (anchor)
            </div>
          </div>
          <div>
            <Element name="test1" className="element">
              <div style={{ height: "200px" }}>container</div>
            </Element>
            <Element name="test2" className="element">
              <div style={{ height: "200px" }}>container</div>
            </Element>
            <Element name="test3" className="element">
              <div style={{ height: "200px" }}>container</div>
            </Element>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToPorps = state => {
  return {
    inputReducer: state.inputReducer
  };
};

export default connect(
  mapStateToPorps,
  { addNotes, updateNotes }
)(Home);
