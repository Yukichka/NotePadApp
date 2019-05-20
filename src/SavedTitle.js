import React from "react";
export class SavedTitle extends React.Component {
  // props:
  // - note - obj note to be displayed
  // - onSelect - function to be called when user clicks on the tab
  constructor(props) {
    super(props);
  }
  render() {
    return <div onClick={this.props.onSelect}>{this.props.note.title}</div>;
  }
}
