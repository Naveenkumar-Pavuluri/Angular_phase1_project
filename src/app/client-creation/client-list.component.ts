// client-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.fetchClients();
  }

  fetchClients() {
    this.clientService.getClients().subscribe(
      (data: any) => {
        this.clients = data;
      },
      error => {
        console.error('Error fetching clients', error);
      }
    );
  }
}
