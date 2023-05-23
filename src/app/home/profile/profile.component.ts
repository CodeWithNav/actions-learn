import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
      @Input() value!:number;
      @Output() inc = new EventEmitter<number>();


      onAdd(){
        this.inc.emit(this.value+1);
      }
}
