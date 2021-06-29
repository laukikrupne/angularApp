import {Component} from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  displayPassword = true;
  //log: number[] = [];
  log: Date[] = [];

  revertDisplayPassword() {
    this.displayPassword = !this.displayPassword;
    //this.log.push(this.log.length+1);
    this.log.push(new Date());
  }

}
