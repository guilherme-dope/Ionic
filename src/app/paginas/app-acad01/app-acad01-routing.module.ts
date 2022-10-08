import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAcad01Page } from './app-acad01.page';

const routes: Routes = [
  {
    path: '',
    component: AppAcad01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppAcad01PageRoutingModule {}
