import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor() {}

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.http.get('http://api.github.com/users?per_page=12')
  //     .subscribe(data => {
  //       console.log(data)
  //     })
  // }
}
