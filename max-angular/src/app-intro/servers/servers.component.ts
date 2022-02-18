
import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  status = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  servers = ['My server'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    if (this.serverName === '') return;
    this.serverCreationStatus = 'New server was created';
    this.servers = this.servers.concat(this.serverName);
    this.serverName = '';
  }
}
