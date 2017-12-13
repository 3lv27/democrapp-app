import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageSignupComponent } from './pages/page-signup/page-signup.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PagePollsComponent } from './pages/page-polls/page-polls.component';
import { PagePollDetailComponent } from './pages/page-poll-detail/page-poll-detail.component';
import { PagePollCreateComponent } from './pages/page-poll-create/page-poll-create.component';
import { PageMeComponent } from './pages/page-me/page-me.component';

import { PollListComponent } from './components/poll-list/poll-list.component';
import { PollCardComponent } from './components/poll-card/poll-card.component';
import { UserActionsComponent } from './components/user-actions/user-actions.component';
import { PollVoteComponent } from './components/poll-vote/poll-vote.component';
import { PollResultsComponent } from './components/poll-results/poll-results.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { PollCreateComponent } from './components/poll-create/poll-create.component';

import { PollService } from './services/poll.service';
import { AuthService } from './services/auth.service';

import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireLoginGuard } from './guards/require-login.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';

const routes: Routes = [
  { path: '', canActivate: [InitAuthGuard], component: PageHomeComponent },
  { path: 'login', canActivate: [RequireAnonGuard], component: PageLoginComponent },
  { path: 'signup', canActivate: [RequireAnonGuard], component: PageSignupComponent },
  { path: 'polls', canActivate: [InitAuthGuard], component: PagePollsComponent },
  { path: 'polls/create', canActivate: [RequireLoginGuard], component: PagePollCreateComponent },
  { path: 'polls/:id', canActivate: [RequireLoginGuard], component: PagePollDetailComponent },
  { path: 'me', canActivate: [RequireLoginGuard], component: PageMeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageSignupComponent,
    PageLoginComponent,
    PagePollsComponent,
    PagePollDetailComponent,
    PagePollCreateComponent,
    PageMeComponent,
    PollListComponent,
    PollCardComponent,
    UserActionsComponent,
    PollVoteComponent,
    PollResultsComponent,
    AuthSignupComponent,
    AuthLoginComponent,
    PollCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PollService,
    AuthService,
    InitAuthGuard,
    RequireLoginGuard,
    RequireAnonGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
