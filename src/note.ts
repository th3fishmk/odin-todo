export interface note {
  id: string;
  done: boolean;
  title: string;
  content?: string;
  dueDate?: Date;
  priority?: number;
  customOrder?: number;
}

export function getNotes() {
  return allNotes;
}

export function renderNotes(container: HTMLElement) {
  const notes = getNotes();
  notes.forEach((element) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="note">
      <h2 class="note-title">
        <input type="checkbox" name="note-completed" id="note-completed" ${element.done === true ? "checked" : ""}>
        ${element.title}
      </h2>
      <article class="note-content">
        ${element.content === undefined ? "" : element.content}
      </article>
      <div class="metadata cont-flex">
        <h3 class="dueDate">
          Due
          <input type="date" name="dueDate" id="dueDate">
        </h3>
        <h3>
          Priority
          <select name="priorities" id="priority">
            <option value="0" ${element.priority === 0 ? "selected" : ""}>low</option>
            <option value="1" ${element.priority === 1 ? "selected" : ""}>medium</option>
            <option value="2" ${element.priority === 2 ? "selected" : ""}>high</option>
          </select>
        </h3>
      </div>
    </div>`;
    container.appendChild(newDiv);
  });
}

const allNotes: note[] = [
  {
    id: "122112",
    done: true,
    title: "Do something",
    content: "I am expecting to do something one of this days",
    dueDate: new Date(10, 2, 2025),
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
