import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MaterialModule } from './material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeloanComponent } from 'src/app/homeloan/homeloan.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { BusinessloanComponent } from './businessloan/businessloan.component';
import { CarloanComponent } from './carloan/carloan.component';
import { EducationloanComponent } from './educationloan/educationloan.component';
import { GoldloanComponent } from './goldloan/goldloan.component';
import { AdminModule } from './admin/admin.module';
import { RateService } from './rate.service';

import {CookieService} from 'angular2-cookie/services/cookies.service';
import {Ng2Webstorage} from 'ngx-webstorage';

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    HomeloanComponent,
    PersonalloanComponent,
    BusinessloanComponent,
    CarloanComponent,
    EducationloanComponent,
    GoldloanComponent,
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AdminModule,
    Ng2Webstorage,
    FormsModule
    
  ],
  providers: [RateService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
