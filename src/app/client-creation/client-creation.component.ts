import { Component } from '@angular/core';

class Client {
  constructor(
    public clientName: string = '',
    public contactPerson: string = '',
    public email: string = '',
    public phoneNumber: string = ''
  ) {}
}

@Component({
  selector: 'app-client-creation',
  templateUrl: './client-creation.component.html',
  styleUrls: ['./client-creation.component.css']
})
export class ClientCreationComponent {
  newClient: Client = new Client();
  submittedClients: Client[] = [];

  onSubmit() {
    // Add the new client to the array
    this.submittedClients.push({ ...this.newClient });

    // Clear the form
    this.newClient = new Client();
  }

  deleteClient(index: number) {
    this.submittedClients.splice(index, 1);
  }
}
