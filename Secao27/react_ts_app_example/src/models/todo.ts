class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    this.text = todoText;
  }
}

export default Todo;
