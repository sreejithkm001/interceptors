import { Component } from '@angular/core';
import { JSONPlaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-getdatabyid',
  templateUrl: './getdatabyid.component.html',
  styleUrls: ['./getdatabyid.component.scss']
})

export class GetdatabyidComponent {
  userId!: number; 
  userData: any;
  constructor(private JSONPlaceholder: JSONPlaceholderService) { }
  getDataById() {
    if (this.userId) {
      this.JSONPlaceholder.getPostById(this.userId).subscribe(
        (userData: any) => {
          this.userData = userData;
        },
        (error) => {
          // Handle error, e.g., show a message to the user
          console.error('Error fetching data:', error);
        }
      );
    }
  }
}
