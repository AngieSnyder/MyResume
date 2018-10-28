import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyWorkExperienceComponent } from './my-work-experience/my-work-experience.component';
import { TechnologyComponent } from './technology/technology.component';
import { ProfDevelopmentComponent } from './prof-development/prof-development.component';

@NgModule({
  declarations: [
    AppComponent,
    MyWorkExperienceComponent,
    TechnologyComponent,
    ProfDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
