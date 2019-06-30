import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { Link, Element, scroller } from "react-scroll";

import AutoSelect from "./AutoSelect";

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
    const selectedValue = {
      label: "Pick a really long name",
      value: "Pick a really long name"
    }
    return (
      <div style={{ width: 200 }}>
        <AutoSelect
          options={[
            {
              label: "Pick a really long name",
              value: "Pick a really long name"
            }
          ]}
          value={selectedValue}
          onChange={() => console.warn('clicked')}
        />
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
