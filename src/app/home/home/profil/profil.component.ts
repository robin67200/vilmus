import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  close() {
    this.onClose.emit(null);
  }
}
