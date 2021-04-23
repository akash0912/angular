import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'player', component: PlayerComponent},
      {path: 'main-page', component: MainPageComponent},
      
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
