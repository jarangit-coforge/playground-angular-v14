import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { IRPackageComponent } from './pages/irpackage/irpackage.component';
import { PackageBadgeComponent } from './pages/package-badge/package-badge.component';
import { FinderComponent } from './pages/finder/finder.component';

const routes: Routes = [
  { path: 'playground', component: PlaygroundComponent },
  { path: 'ir-package', component: IRPackageComponent },
  { path: 'package-badge', component: PackageBadgeComponent },
  { path: 'finder', component: FinderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
