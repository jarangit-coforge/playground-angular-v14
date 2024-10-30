import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from 'src/pipe/safe-html-pipe.pipe';
import { IRPackageComponent } from './pages/irpackage/irpackage.component';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { NgChartjsModule } from 'ng-chartjs';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    SafeHtmlPipe,
    IRPackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule,
    FormsModule,
    MapsModule,
    NgChartjsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
