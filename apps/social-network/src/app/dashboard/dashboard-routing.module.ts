import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from 'apps/social-network/src/app/dashboard/components/feed/feed.component';
import { DashboardComponent } from 'apps/social-network/src/app/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'feed',
        component: FeedComponent
      },
      {
        path: '',
        redirectTo: 'feed'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
