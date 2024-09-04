import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { AboutComponent } from './components/about/about.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RoleChooseComponent } from './components/role-choose/role-choose.component';

export const routes: Routes = [

    {
        path:"adminLogin",
        component:AdminLoginComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'mobile',
        component:MobileComponent
    },
    {
        path:'',
        component:RoleChooseComponent
    },
    {
        path:'home',
        component:HomePageComponent
    }

];
