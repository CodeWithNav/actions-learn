import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProfileComponent } from "./profile/profile.component";

export const homeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    },

];