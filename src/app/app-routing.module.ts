import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { CreatorPageComponent } from './pages/creator-page/creator-page.component';

const routes: Routes = [
    { path: 'authentication', component: AuthenticationPageComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'create', component: CreatorPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
