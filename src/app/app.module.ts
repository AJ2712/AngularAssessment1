import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { NavigationComponent } from './myComponents/navigation/navigation.component';
import { AdvertisementsComponent } from './myComponents/advertisements/advertisements.component';
import { ContentComponent } from './myComponents/content/content.component';
import { MainComponent } from './myComponents/main/main.component';
import { PostsComponent } from './myComponents/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AdvertisementsComponent,
    ContentComponent,
    MainComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
