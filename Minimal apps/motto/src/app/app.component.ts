import { Component } from "@angular/core";

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedIn: true,
    },
    {
      id: 2,
      fullname: "Rose",
      checkedIn: false,
    },
    {
      id: 3,
      fullname: "James",
      checkedIn: true,
    },
    {
      id: 4,
      fullname: "Luise",
      checkedIn: true,
    },
    {
      id: 5,
      fullname: "Tina",
      checkedIn: false,
    },
  ];
}
