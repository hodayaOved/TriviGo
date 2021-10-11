import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './component/category/category.component';
import { FormsModule } from "@angular/forms";
import { StartGameComponent } from './component/start-game/start-game.component';
import{ReactiveFormsModule} from '@angular/forms';
import { PlayerConnectComponent } from './component/player-connect/player-connect.component';
import { SystemCommentsComponent } from './component/system-comments/system-comments.component';
import { GameOnlineComponent } from './component/game-online/game-online.component';
import { OpenGameComponent } from './component/open-game/open-game.component';
import { AboutComponent } from './component/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CategoryComponent,
    StartGameComponent,
    PlayerConnectComponent,
    SystemCommentsComponent,
    GameOnlineComponent,
    OpenGameComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
