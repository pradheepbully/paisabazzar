import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paisabazaar';
  constructor(private cookie:CookieService,private local:LocalStorageService,private session:SessionStorageService){}

  setCookies(){
    this.cookie.put('Test','Testing Cookie');
  }
  getCookies(){
    alert(this.cookie.get("Test"));
  }
  delCookies(){
    this.cookie.remove('Test');
  }
  setLocalStorage(){
this.local.store('Test','Testing Local Storage');
  }
getLocalStorage(){
alert(this.local.retrieve('Test'));
}
delLocalStorage(){
this.local.clear('Test');
}
setSessionStorage(){this.session.store('Test','Testing Session Storage');}
getSessionStorage(){alert(this.session.retrieve('Test'));}
delSessionStorage(){this.session.clear('Test');}


}
