import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { DirectiveComponent } from './directive/directive.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpModuleComponent } from './http-module/http-module.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { GitProfileComponent } from './git-profile/git-profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitFollowersComponent } from './git-followers/git-followers.component';
import { PostsComponent } from './posts/posts.component';
import { CoursesService } from './courses.service';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { OrderService } from './services/order.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    BootstrapPanelComponent,
    DirectiveComponent,
    InputFormatDirective,
    ContactFormComponent,
    HttpModuleComponent,
    NavbarComponent,
    GitProfileComponent,
    HomeComponent,
    NotFoundComponent,
    GitFollowersComponent,
    PostsComponent,
    AdminComponent,
    LoginComponent,
    NoAccessComponent,
    CourseComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '' ,
        component: HomeComponent
      },
      {
        path: 'followers/:id/:username' ,
        component: GitProfileComponent
      },
      {
        path: 'followers' ,
        component: GitFollowersComponent
      },
      {
        path: 'posts' ,
        component: PostsComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },

      {
        path: 'no-access',
        component: NoAccessComponent
      },
      {
        path: '**' ,
        component: NotFoundComponent
      }
    ])

  ],
  providers: [
    CoursesService,
    PostService,
    AuthService,
    OrderService,
    AuthGuard,
    AdminAuthGuard,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    {provide: ErrorHandler , useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
