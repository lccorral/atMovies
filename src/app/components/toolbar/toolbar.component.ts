import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

@Input() title: string;
@Input() isMain: boolean;
@Output() SideNavToggle = new EventEmitter();

 constructor() {}

  openSidenav() {
   this.SideNavToggle.emit();
  }
}
