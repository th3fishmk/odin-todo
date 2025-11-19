import { renderNotes, type note } from "./note";
import "./style.css";
console.log("Starting app...");

const header = document.getElementById("app-header");
const noteContainer = document.getElementById("notes-container");

if (header) {
  //   header.textContent = "";
}

if (noteContainer) {
  renderNotes(noteContainer);
}

const notes: note[] = [];

console.log(notes.length);
