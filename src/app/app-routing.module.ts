import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetdatabyidComponent } from './getdatabyid/getdatabyid.component';
import { GetfulldataComponent } from './getfulldata/getfulldata.component';
import { PostdataComponent } from './postdata/postdata.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    component: GetdatabyidComponent,
    path: 'getbyid',
  },
  {
    component: GetfulldataComponent,
    path: 'get',
  },
  {
    component: PostdataComponent,
    path: 'post',
  },
  {
    component: DeleteComponent,
    path: 'delete',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
