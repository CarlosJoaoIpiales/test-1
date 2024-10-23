import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { MetersComponent } from '../../devices/meters/meters.component';
import { GatewaysComponent } from '../../devices/gateways/gateways.component';
import { RegisterMeterComponent } from '../../devices/meters/register-meter/register-meter.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    {
        path: 'devices',
        children: [
            { path: 'meters', component: MetersComponent },
            { path: 'meters/register-meter', component: RegisterMeterComponent },
            { path: 'gateways', component: GatewaysComponent }
        ]
    }
];
