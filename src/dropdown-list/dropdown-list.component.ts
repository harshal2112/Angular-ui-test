import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent {

  constructor() { }
  
  @Input() defaultValue:string='';
  @Input() label:string='';
  @Input() isDisabled: boolean = false;
  @Input () options:Array<string>=[]
  @Output() countryEvent = new EventEmitter<string>();  

  getDropdownList(event: any){
    this.countryEvent.emit(event.target.value);
  }
}


