import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Card } from './card/card';
import { Projects } from './projects/projects';
import { Dashboard } from './dashboard/dashboard';
import { protectDashboardGuard } from './protect-dashboard-guard';

export const routes: Routes = [
     { path: '', component: About },
    {
        path: 'about', component: About, children: [
           {path:'projects',component:Projects}  //child routing
        ]
    }, // route
    { path: 'contact', component: Contact },
    { path: 'card/:id', component: Card }, //dynamic routing
    { path:'dashboard',component:Dashboard,canActivate:[protectDashboardGuard]}
];
