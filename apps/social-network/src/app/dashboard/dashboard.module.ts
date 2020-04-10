import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from 'apps/social-network/src/app/dashboard/dashboard-routing.module';
import { SharedModule } from 'apps/social-network/src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PostFormComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
