import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClose = new EventEmitter<any>();


  close() {
    this.onClose.emit(null);
  }

  ngOnInit() {
  }

}
