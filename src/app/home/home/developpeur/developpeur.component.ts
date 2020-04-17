import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-developpeur',
  templateUrl: './developpeur.component.html',
  styleUrls: ['./developpeur.component.css']
})
export class DeveloppeurComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();


  close() {
    this.onClose.emit(null);
  }

  ngOnInit() {
  }

}
