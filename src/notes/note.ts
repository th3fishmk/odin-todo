export interface Note {
  id: string;
  title: string;
  done?: boolean;
  content?: string;
  dueDate?: string;
  priority?: number;
  customOrder?: number;
}

export function getNotes(): Note[] {
  const notes = localStorage.getItem("notes");
  console.log(typeof notes);

  if (notes === "undefined") {
    return allNotes;
  }
  if (notes === null) {
    return allNotes;
  }
  return JSON.parse(notes);
}

export function saveNote(htmlNote: HTMLElement) {
  console.log(`saving`);
  const note = getNoteContent(htmlNote);
}

export function getNoteContent(htmlNote: HTMLElement): Note {
  const newNote: Note = {
    id: "",
    title: "",
  };
  const id = htmlNote.getElementsByClassName("note")[0].getAttribute("id");
  if (id) {
    newNote.id = id;
  }
  let title = htmlNote.getElementsByClassName("note-title")[0].textContent;
  title = title.trim();
  newNote.title = title;

  const done = htmlNote.getElementsByClassName("done")[0] as HTMLInputElement;
  if (done.checked) {
    newNote.done = true;
  } else {
    newNote.done = false;
  }

  console.log(newNote);
  return newNote;
}

export function renderNotes(container: HTMLElement) {
  const notes = getNotes();
  console.log(notes);

  notes.forEach((currentNote) => {
    const noteHTML = document.createElement("div");
    noteHTML.innerHTML = `
    <div class="note" id="${currentNote.id}">
      <h2 class="note-title">
        <input class="done" type="checkbox" name="note-completed" id="" ${currentNote.done === true ? "checked" : ""}>
        ${currentNote.title}
      </h2>
      <article class="note-content">
        ${currentNote.content === undefined ? "" : currentNote.content}
      </article>
      <div class="metadata cont-flex">
      <div>
        <h3 class="dueDate">
          Due
        </h3>
        <input type="date" name="dueDate" id="" value=${currentNote.dueDate === undefined ? "" : currentNote.dueDate}>
      </div>
        <div>
          <h3>
            Priority
          </h3>
          <select name="priorities" id="">
            <option value="0" ${currentNote.priority === 0 ? "selected" : ""}>low</option>
            <option value="1" ${currentNote.priority === 1 ? "selected" : ""}>medium</option>
            <option value="2" ${currentNote.priority === 2 ? "selected" : ""}>high</option>
          </select>
        </div>
        <button type="button" id="${currentNote.id}-button">Save</button>
      </div>
    </div>
    `;
    container.appendChild(noteHTML);
    const button = document.getElementById(`${currentNote.id}-button`);
    button?.addEventListener("click", () => {
      saveNote(noteHTML);
    });
  });
}

const allNotes: Note[] = [
  {
    id: "n122112",
    done: true,
    title: "Do something",
    content: "I am expecting to do something one of this days",
    dueDate: "2025-12-05",
    priority: 0,
  },
];
