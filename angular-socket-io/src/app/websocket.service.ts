import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket; //  cennects to server

  constructor() { }

  connect(): Subject<MessageEvent> {
    this.socket = io(environment.ws_url);

    const observable = new Observable(obs => {
      this.socket.on('message', (data) => {
        console.log('Recieved a message from server');
        obs.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    const observer = {
      next: (data: Object) => {
        this.socket.emit('message', JSON.stringify(data));
      }
    };

    return Subject.create(observer, observable);

  }
}
