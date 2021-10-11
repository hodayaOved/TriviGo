import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemCommentsComponent } from './component/system-comments/system-comments.component';
import { CategoryComponent } from './component/category/category.component';
import { GameOnlineComponent } from './component/game-online/game-online.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { OpenGameComponent } from './component/open-game/open-game.component';
import { PlayerConnectComponent } from './component/player-connect/player-connect.component';
import { StartGameComponent } from './component/start-game/start-game.component';
import { SystemComments } from 'src/model/SystemComments';

const routes: Routes = [ 
  {path: 'PlayerConnect',component: PlayerConnectComponent},
  {path: 'login',component: LoginComponent},
  {path: 'category',component: CategoryComponent},
  {path: 'StartGame/:id',component: StartGameComponent},
  {path: 'StartGame',component: StartGameComponent},
  {path: 'game-online',component:GameOnlineComponent},
  {path: 'openGame',component:OpenGameComponent},
  {path: 'SystemComment',component:SystemCommentsComponent},
  {path: 'home',component: HomeComponent},
  {path: '**',component: HomeComponent}

 


  //{path: 'home',component: StartGameComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
