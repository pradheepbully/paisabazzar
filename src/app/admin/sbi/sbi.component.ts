import { Component, OnInit } from '@angular/core';
import { RateService } from '../../rate.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-sbi',
  templateUrl: './sbi.component.html',
  styleUrls: ['./sbi.component.css']
})
export class SbiComponent implements OnInit {

  constructor(private rate:RateService,private local:LocalStorageService) { }

  ngOnInit() {
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
  changeSbiBusinessRate(interest){
  this.rate.businessRate(interest);
  this.local.store('SBIBR',interest);
}

changeSbiCarRate(interest){
  this.rate.carRate(interest);
  this.local.store('SBICR',interest);
}

changeSbiEducationRate(interest){
  this.rate.educationRate(interest);
  this.local.store('SBIER',interest);
}

changeSbiGoldRate(interest){
  this.rate.goldRate(interest);
  this.local.store('SBIGR',interest);
}

changeSbiHomeRate(interest){
  this.rate.homeRate(interest);
  this.local.store('SBIHR',interest);
}

changeSbiPersonalRate(interest){
  this.rate.personalRate(interest);
  this.local.store('SBIPR',interest);
}

}
