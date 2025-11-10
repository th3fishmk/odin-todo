import "./style.css";
import { type ToDo, Todos } from "./tasks/todos";
import { Configurations } from "./user";

const configs = new Configurations();
const user = configs.get();

const username = document.getElementById("username");

if (username) {
  username.textContent = user.username;
}

// Note editor

const editor = document.getElementById("editor");
if (editor) {
  editorSetIdle(editor);
} else {
  throw new Error("Error getting the editor");
}

function editorSetWork(currentEditor: HTMLElement, currentNote: ToDo) {
  currentEditor.classList.remove("void");
  currentEditor.textContent =
    currentNote.description === undefined ? "" : currentNote.description;
}

function editorSetIdle(currentEditor: HTMLElement) {
  currentEditor.textContent = "Please open up a note";
  currentEditor.classList.add("void");
}

// Settings up the existing quick tasks

const todoManager = new Todos();
const todos = todoManager.get();

const quickNotes = document.getElementById("quick-tasks");
if (quickNotes) {
  for (let index = 0; index < todos.length; index++) {
    const note = document.createElement("div");
    note.textContent = todos[index].title;
    note.classList.add("task");
    quickNotes.appendChild(note);
    note.addEventListener("click", () => {
      editorSetWork(editor, todos[index]);
    });
  }
} else {
  console.log("Error getting the `quickNotes` HTML element");
}
