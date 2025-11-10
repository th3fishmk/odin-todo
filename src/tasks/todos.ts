export interface ToDo {
  title: string;
  description?: string;
  dueDate?: Date;
  priority?: Priority;
}
export enum Priority {
  low = 0,
  medium = 1,
  high = 2,
}

export class Todos {
  get(): ToDo[] {
    return todos;
  }
}
const todos: ToDo[] = [
  {
    title: "Study",
    description: "Read some book or something",
    priority: 0,
  },
  {
    title: "Do Homework",
    description: "As far as I remember, we was studying something",
    priority: 0,
  },
  {
    title: "Don't die",
    description: "Don't cause any trouble",
    priority: 1,
  },
  {
    title: "Play battlefield",
    description: "Have a little fun, you *****",
    priority: 0,
  },
];
