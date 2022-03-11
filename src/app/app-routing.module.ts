import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path:'technologies',
    loadChildren: ()=> import('./technologies/technologies.module').then((m)=> m.TechnologiesModule),
  },
  // {
  //   path:'experiences',
  //   loadChildren: ()=> import('./animais/animais.module').then((m)=> m.AnimaisModule),
  // },
  // {
  //   path:'contact',
  //   loadChildren: ()=> import('./animais/animais.module').then((m)=> m.AnimaisModule),
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
