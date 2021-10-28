import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_layout/header/header.component';
import { SidebarComponent } from './_layout/sidebar/sidebar.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpService } from './services/http.service';
import { HomeComponent } from './home/home.component';
import { ErrorsComponent } from './errors/errors.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoadingComponent } from './_shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ErrorsComponent,
    MovieDetailComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [HttpService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
