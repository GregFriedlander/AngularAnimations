import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { ContainedComponent } from './contained/contained.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { AnimSubComponent } from './anim-sub/anim-sub.component';
import { MouseComponent } from './mouse/mouse.component';
import { CustomComponent } from './custom/custom.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    ContainedComponent,
    AdvancedComponent,
    AnimSubComponent,
    MouseComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
