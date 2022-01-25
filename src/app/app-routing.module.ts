
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from "@angular/platform-browser";

const appRoutes: Routes = [

    { path: '', component: HomeComponent },

    {path: 'login', component: LoginComponent},


    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent}
    ] },

    { path: 'servers', canActivate:[AuthGuard], component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] ,
      resolve: { server: ServerResolver} },
      { path: ':id', component: ServerComponent, canActivate:[AuthGuard]}
    ] },

    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Opps! La página no funciona'}},
    { path: '**', redirectTo: '/not-found'}
    
  ];
 
@NgModule({
    imports:[
    RouterModule.forRoot(appRoutes), //registramos las rutas llamando a la constante que hemos creado antes
    BrowserModule
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }