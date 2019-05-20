import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { SavedTitle } from "./SavedTitle";
import { InputField } from "./InputField";
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: { title: "", content: "" },
      notes: []
    };
    this.onNewNote = this.onNewNote.bind(this);
    this.savedNote = this.savedNote.bind(this);
  }
  onNewNote(newNote) {
    console.log(
      `logged from the App: Title:${newNote.title} and Content:${
        newNote.content
      }`
    );
    this.setState({
      note: newNote
    });
    this.state.notes.push(newNote);
    this.setState({
      notes: this.state.notes
    });
  }
  savedNote(noteIndex) {
    console.log("index", noteIndex);
    const clickedNote = this.state.notes[noteIndex];
    console.log("all notes:", this.state.notes);
    console.log("clicked on :", clickedNote);
    this.setState({
      note: {
        title: this.state.notes[noteIndex].title,
        content: this.state.notes[noteIndex].content
      }
    });
  }

  render() {
    return (
      <div>
        <h1>NotePad App</h1>
        <Container>
          <Row>
            <Col md={3}>
              {this.state.notes.map((n, idx) => (
                <SavedTitle
                  note={n}
                  key={idx}
                  onSelect={event => this.savedNote(idx)}
                />
              ))}
              <hr />
              current note: {JSON.stringify(this.state.note)}
              <br />
              <Button outline color="success">
                Add New
              </Button>{" "}
            </Col>
            <Col md={9}>
              <InputField onDataReady={this.onNewNote} note={this.state.note} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
