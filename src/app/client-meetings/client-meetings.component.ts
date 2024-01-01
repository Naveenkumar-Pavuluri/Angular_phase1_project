import { Component } from '@angular/core';

class Meeting {
  constructor(
    public clientName: string = '',
    public meetingPerson: string = '',
    public meetingDateTime: string = ''
  ) {}
}

@Component({
  selector: 'app-client-meetings',
  templateUrl: './client-meetings.component.html',
  styleUrls: ['./client-meetings.component.css']
})
export class ClientMeetingsComponent {
  newMeeting: Meeting = new Meeting();
  upcomingMeetings: Meeting[] = [];

  addMeeting() {
    // Add the new meeting to the array
    this.upcomingMeetings.push({ ...this.newMeeting });

    // Clear the form
    this.newMeeting = new Meeting();
  }

  deleteMeeting(index: number) {
    this.upcomingMeetings.splice(index, 1);
  }
}
