import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!!!';
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer(): void{
    this.serverCreationStatus = 'Server was created!! Name is ' + this.serverName;
  }
  onUpdateServerName(event: any): void{
    this.serverName = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}
