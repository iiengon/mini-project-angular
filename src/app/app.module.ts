import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PutOnShelfComponent } from './components/put-on-shelf/put-on-shelf.component';
import { EditPutOnShelfComponent } from './components/edit-put-on-shelf/edit-put-on-shelf.component';
import { ValidationDirective } from './directives/validation.directive';
import { NgSelectModule } from '@ng-select/ng-select';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppInterceptorService } from '@mnproject/service/cors/app-interceptor';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '@mnproject/shared/shared.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PutOnShelfComponent,
    EditPutOnShelfComponent,
    ValidationDirective,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
          useClass: AppInterceptorService,
          multi: true,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
