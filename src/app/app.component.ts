import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JSONPlaceholderService } from './jsonplaceholder.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  postDataForm: FormGroup;
  postResponse: any;
  title = 'get-post-api';
  data: Array<any>;
  userId!: number;
  userData: any;
  constructor(
    private formBuilder: FormBuilder,
    private JSONPlaceholder: JSONPlaceholderService
  ) {
    this.data = new Array<any>();
    this.postDataForm = this.formBuilder.group({
      id: [null, Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }
  // to fetch full data(HTTP GET) 
  getDataFromAPI() {
    this.JSONPlaceholder.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
  // to fetch data by id(HTTP GET)
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
  // HTTP POST
  onSubmit() {
    if (this.postDataForm.valid) {
      const postData = this.postDataForm.value;

      this.JSONPlaceholder.postData(postData).subscribe(
        (response) => {
          this.postResponse = response;
          console.log('POST request successful:', this.postResponse);
          this.postDataForm.reset();
        },
        (error) => {
          console.error('Error making POST request:', error);
        }
      );
    }
  }
}
