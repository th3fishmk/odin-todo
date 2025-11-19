export interface Note {
  id: string;
  done: boolean;
  title: string;
  content?: string;
  dueDate?: string;
  priority?: number;
  customOrder?: number;
}

export function getNotes() {
  return allNotes;
}

export function renderNotes(container: HTMLElement) {
  const notes = getNotes();
  notes.forEach((currentNote) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="note">
      <h2 class="note-title">
        <input type="checkbox" name="note-completed" id="note-completed" ${currentNote.done === true ? "checked" : ""}>
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
        <input type="date" name="dueDate" id="dueDate" value=${currentNote.dueDate === undefined ? "" : currentNote.dueDate}>
      </div>
        <div>
          <h3>
            Priority
          </h3>
          <select name="priorities" id="priority">
            <option value="0" ${currentNote.priority === 0 ? "selected" : ""}>low</option>
            <option value="1" ${currentNote.priority === 1 ? "selected" : ""}>medium</option>
            <option value="2" ${currentNote.priority === 2 ? "selected" : ""}>high</option>
          </select>
        <div>
      </div>
    </div>`;
    container.appendChild(newDiv);
  });
}

const allNotes: Note[] = [
  {
    id: "122112",
    done: true,
    title: "Do something",
    content: "I am expecting to do something one of this days",
    dueDate: "2025-12-05",
    priority: 0,
  },
  {
    id: "122112132",
    done: false,
    title: "Read a book",
    priority: 2,
    content: "Doesn't matter which one, just read one!",
  },
  {
    id: "1225112",
    done: false,
    title: "do my thing",
    priority: 1,
  },
  {
    id: "1223462112",
    done: false,
    title: "Complete the odin project",
  },
];
