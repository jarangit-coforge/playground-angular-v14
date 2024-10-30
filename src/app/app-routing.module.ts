import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { IRPackageComponent } from './pages/irpackage/irpackage.component';

const routes: Routes = [
  { path: 'playground', component: PlaygroundComponent },
  { path: 'ir-package', component: IRPackageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
