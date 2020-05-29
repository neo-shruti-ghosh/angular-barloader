import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'generic-barloader',
  templateUrl: './generic-barloader.component.html',
  styleUrls: ['./generic-barloader.component.scss']
})
export class GenericBarloaderComponent implements OnInit {
  @Input() public myText: string = null; //parent to child communication

  @Output() public closeMeEvent = new EventEmitter(); //child to parent communication

  constructor() { }

  ngOnInit() {
  }

  closeMe() {
    this.closeMeEvent.emit(null);
  }
  

}