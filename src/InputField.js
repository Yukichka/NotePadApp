import React from "react";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";
export class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { note: { title: "", content: "" } };
    this.handleChange = this.handleChange.bind(this);
    this.savedNote = this.savedNote.bind(this);
  }
  handleChange(event) {
    event.target.name === "title"
      ? this.setState({
          note: { title: event.target.value, content: this.state.note.content }
        })
      : this.setState({
          note: { title: this.state.note.title, content: event.target.value }
        });
  }

  savedNote(event) {
    console.log(
      `you texted: Title:${this.state.note.title} and Content:${
        this.state.note.content
      }`
    );
    const newNote = {
      title: this.state.note.title,
      content: this.state.note.content
    };
    this.props.onDataReady(newNote);
    event.preventDefault();
  }
  render() {
    return (
      <Form onSubmit={this.savedNote}>
        <FormGroup>
          <Label>Title:</Label>
          <Input
            type="text"
            name="title"
            value={this.state.note.title}
            onChange={this.handleChange}
          />
          <Label>Content:</Label>
          <Input
            type="textarea"
            name="text"
            value={this.state.note.content}
            onChange={this.handleChange}
          />
          <Button outline color="info" type="submit" value="submit">
            Save
          </Button>{" "}
        </FormGroup>
      </Form>
    );
  }
}
