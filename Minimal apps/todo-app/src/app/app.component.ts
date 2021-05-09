import { Component } from "@angular/core";

class Item {
  task: string;
  done: boolean;

  constructor(task: string) {
    this.task = task;
    this.done = false;
  }
}

@Component({
  selector: "todo-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  items: Item[] = [
    { task: "Buy bread", done: false },
    { task: "Read book", done: false },
    { task: "To Gym", done: true },
  ];

  addItem(text: string): void {
    if (text == null || text.trim() == "") return;
    this.items.push(new Item(text));
  }
}
