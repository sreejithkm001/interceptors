import { Component } from '@angular/core';
import { JSONPlaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  userId!: number; 
  userData: any;
  constructor(private JSONPlaceholder: JSONPlaceholderService) { }
  // to get data by id
  getDataById() {
    if (this.userId) {
      this.JSONPlaceholder.getPostById(this.userId).subscribe(
        (userData: any) => {
          this.userData = userData;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
    }
  }
  // to update data with PUT
  onPutData() {
    if (this.userId && this.userData) {
      const updatedData = { title: 'Updated Title', body: 'Updated Body' }; 
      this.JSONPlaceholder.putData(this.userId, updatedData).subscribe(
        () => {
          console.log(`Data with ID ${this.userId} updated successfully with PUT`);
          this.getDataById();
        },
        (error) => {
          console.error('Error updating data with PUT:', error);
        }
      );
    }
  }

  // to update data with PATCH
  onPatchData() {
    if (this.userId && this.userData) {
      const updatedData = { title: 'Updated Title' }; 
      this.JSONPlaceholder.patchData(this.userId, updatedData).subscribe(
        () => {
          console.log(`Data with ID ${this.userId} updated successfully with PATCH`);
          this.getDataById();
        },
        (error) => {
          console.error('Error updating data with PATCH:', error);
        }
      );
    }
  }

  // to delete data
  onDeleteData() {
    if (this.userId) {
      this.JSONPlaceholder.deleteData(this.userId).subscribe(
        () => {
          console.log(`Data with ID ${this.userId} deleted successfully`);
          this.userData = null;
        },
        (error) => {
          console.error('Error deleting data:', error);
        }
      );
    }
  }
}

