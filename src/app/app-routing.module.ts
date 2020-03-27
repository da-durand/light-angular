import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LightCreateComponent } from './pages/light-create/light-create.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lights/create', component: LightCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
