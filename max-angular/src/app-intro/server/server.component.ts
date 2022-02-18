
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  status = 'online';

  getColor() {
    return 'red';
  }

  getFontColor() {
    return 'white';
  }
}
