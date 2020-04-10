import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from 'apps/social-network/src/app/dashboard/dashboard-routing.module';
import { SharedModule } from 'apps/social-network/src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostFormComponent } from './components/post-form/post-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FeedComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
