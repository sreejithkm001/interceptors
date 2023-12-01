import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JSONPlaceholderService } from './jsonplaceholder.service';
import { ReactiveFormsModule } from '@angular/forms';
import { GetfulldataComponent } from './getfulldata/getfulldata.component';
import { GetdatabyidComponent } from './getdatabyid/getdatabyid.component';
import { PostdataComponent } from './postdata/postdata.component';

@NgModule({
  declarations: [
    AppComponent,
    GetfulldataComponent,
    GetdatabyidComponent,
    PostdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JSONPlaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
