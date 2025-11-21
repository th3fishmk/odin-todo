import { type Note, renderNotes } from "./notes/note";
import "./style.css";

const header = document.getElementById("app-header");
const noteContainer = document.getElementById("notes-container");

if (header) {
  //   header.textContent = "";
}

if (noteContainer) {
  renderNotes(noteContainer);
}

const notes: Note[] = [];

console.log(notes.length);
