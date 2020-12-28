import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ImageComponent } from './image/image.component';
import { CropImageComponent } from './crop-image/crop-image.component';
import { CodeGenerateComponent } from './code-generate/code-generate.component';
import { SpinComponent } from './spin/spin.component';
import { WinnerComponent } from './winner/winner.component';
import { FormsModule } from '@angular/forms';
import {StarRatingModule} from 'angular-star-rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WebcamModule} from 'ngx-webcam';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RatingModule } from 'ng-starrating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbdRatingBasic } from './rating-basic';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ImageComponent,
    CropImageComponent,
    CodeGenerateComponent,
    SpinComponent,
    WinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    WebcamModule,
    RatingModule ,
    StarRatingModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  // providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
