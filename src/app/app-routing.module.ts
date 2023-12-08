import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages'
  },
  {
    path: "pages",
    component: DashBoardComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), 
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
