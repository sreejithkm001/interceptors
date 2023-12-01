import { Component } from '@angular/core';
import { JSONPlaceholderService } from '../jsonplaceholder.service';
@Component({
  selector: 'app-getfulldata',
  templateUrl: './getfulldata.component.html',
  styleUrls: ['./getfulldata.component.scss']
})
export class GetfulldataComponent {
  data: Array<any>;
  constructor(private JSONPlaceholder: JSONPlaceholderService) {
    this.data = new Array<any>();
     }
    //  to get full data
  getDataFromAPI() {
    this.JSONPlaceholder.getData().subscribe((data) => {
      console.log(data);
      this.data=data;
    });
  }
}
