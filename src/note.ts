export interface note {
  id: string;
  title: string;
  content?: string;
  dueDate?: Date;
  priority?: number;
  customOrder?: number;
}
