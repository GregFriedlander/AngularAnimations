import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedComponent } from './advanced/advanced.component';
import { BasicComponent } from './basic/basic.component';
import { ContainedComponent } from './contained/contained.component';
import { HomeComponent } from './home/home.component';
import { CustomComponent } from './custom/custom.component';


const routes:Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'basic',
        component: BasicComponent
    },
    {
        path: 'contained',
        component: ContainedComponent
    },
    {
        path: 'advanced',
        component: AdvancedComponent
    },
    {
        path: 'custom',
        component: CustomComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }