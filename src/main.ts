import "./style.css";
import { Configurations } from "./user";
export enum Priority {
	low,
	medium,
	hight,
}

const configs = new Configurations();
const user = configs.get();

const username = document.getElementById("username");

if (username) {
	username.textContent = user.username;
}

const editor = document.getElementById("editor");
if (editor) {
	editorSetIdle(editor);
}

function editorSetWork(currentEditor: HTMLElement, currentNote: ToDo) {
	currentEditor.classList.remove("void");
	currentEditor.textContent =
		currentNote.content === undefined ? "" : currentNote.content;
}

function editorSetIdle(currentEditor: HTMLElement) {
	currentEditor.textContent = "Please open up a note";
	currentEditor.classList.add("void");
}

const todos: ToDo[] = [
	{
		name: "Study",
		content: "Read some book or something",
		priority: Priority.hight,
	},
	{
		name: "Do Homework",
		content: "As far as I remember, we was studying something",
		priority: Priority.hight,
	},
	{
		name: "Don't die",
		content: "Don't cause any trouble",
		priority: Priority.hight,
	},
	{
		name: "Play battlefield",
		content: "Have a little fun, you *****",
		priority: Priority.hight,
	},
];

// Settings up the existing quick tasks
const quickNotes = document.getElementById("quick-tasks");
if (quickNotes) {
	for (let index = 0; index < todos.length; index++) {
		const note = document.createElement("div");
		note.textContent = todos[index].name;
		note.classList.add("task");
		quickNotes.appendChild(note);
		note.addEventListener("click", () => {
			editorSetWork(editor!, todos[index]);
		});
	}
} else {
	console.log("Error getting the `quickNotes` HTML element");
}

interface ToDo {
	name: string;
	content?: string;
	priority?: Priority;
}
