import { Component } from "@angular/core";

@Component({
  selector: "hello-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name: string = "Allen";
  firstname = "Tom";
  age: number = 120;
  myname: string = "Jack";
  count: number = 0;
  increase($event: any): void {
    this.count++;
    console.log($event);
  }
}

//From first task on https://metanit.com/web/angular2/1.1.php
