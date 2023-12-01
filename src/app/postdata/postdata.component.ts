import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JSONPlaceholderService } from '../jsonplaceholder.service';
@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.scss']
})
export class PostdataComponent {
  postDataForm: FormGroup;
  postResponse: any;
  constructor( private formBuilder: FormBuilder,private JSONPlaceholder: JSONPlaceholderService) {
    this.postDataForm = this.formBuilder.group({
      id: [null, Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
}
// to post data
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