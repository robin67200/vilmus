import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  event_list = [
    {
      event: ' Event 1',
      eventLocation: 'Bonjour, je suis Robin Vilmus et je suis developpeur informatique',
      eventDescription: '',
      img: 'https://picsum.photos/900/500?random&t=1',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
     {
      event: ' Event 2',
      eventLocation: 'Dubai',
      eventDescription: 'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
      img: 'https://picsum.photos/900/500?random&t=3',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
     {
      event: ' Event 3',
      eventLocation: 'New York',
      eventDescription: 'NewYork sits on top of event hosting',
      img: 'https://picsum.photos/900/500?random&t=4',
      eventStartDate: new Date('2020/05/20'),
      eventEndingDate: new Date('2020/05/24')
    },
     {
      event: ' Event 4',
      eventLocation: 'Singapore',
      eventDescription: 'Singapore is another great hosting city',
      img: 'https://picsum.photos/900/500?random&t=6',
      eventStartDate: new Date('2018/05/20'),
      eventEndingDate: new Date('2018/05/24')
    },
    {
      event: ' Event 5',
      eventLocation: 'Berlin',
      eventDescription: 'Berlin is best place to hang on',
      img: 'https://picsum.photos/900/500?random&t=7',
      eventStartDate: new Date('2017/07/10'),
      eventEndingDate: new Date('2017/08/14')
    },
    {
      event: ' Event 6',
      eventLocation: 'Mumbai',
      eventDescription: 'Mumbai is hub of startups',
      img: 'src/favicon.ico',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
    {
      event: ' Event 7',
      eventLocation: 'Barcelona',
      eventDescription: 'Barcelona is another good city',
      img: 'ZZZ',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
  ];

  upcoming_events =  this.event_list.filter( event => event.eventStartDate > new Date());
  past_events = this.event_list.filter(event => event.eventEndingDate < new Date());
  current_events =  this.event_list.filter( event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())));

  constructor() { }

  ngOnInit() {
  }

}
