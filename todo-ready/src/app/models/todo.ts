export interface Todo {
  id: number;
  title?: string;
  description?: string;
  isCompleted?: boolean;
  isFavorite?: boolean;
  date?: Date;
}
