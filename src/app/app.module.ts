import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainNewsPageComponent } from './main-news-page/main-news-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { PopularNewsComponent } from './popular-news/popular-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainNewsPageComponent,
    DashboardComponent,
    NewsComponent,
    PopularNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
