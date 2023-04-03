import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackenComponent } from './backen/backen.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: 'backen', component: BackenComponent },
  { path: 'form', component: FormComponent },
  { path: 'index', component: IndexComponent },
  { path: 'show', component: ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
