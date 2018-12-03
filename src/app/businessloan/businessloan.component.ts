import { Component, OnInit } from '@angular/core';
import { RateService } from '../rate.service';
import { LocalStorageService } from 'ngx-webstorage';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-businessloan',
  templateUrl: './businessloan.component.html',
  styleUrls: ['./businessloan.component.css']
})
export class BusinessloanComponent implements OnInit {

  constructor(private rate:RateService,private local:LocalStorageService) {}
  emi1:any=0;
  emi2:any=0;
  emi3:any=0;
  emi4:any=0;
  totAmount1:any=0;
  totAmount2:any=0;
  totAmount3:any=0;
  totAmount4:any=0;
  r1:any=10/12/100;
  r2:any=11/12/100;
  r3:any=12/12/100;
  r4:any=13/12/100;
  t11:any=0;
  t12:any=0;
  t13:any=0;
  t14:any=0;
  t21:any=0;
  t22:any=0;
  t23:any=0;
  t24:any=0;
  t33:any=1;
  t31:any=1;
  t32:any=1;
  t34:any=1;
  
  calculate(amount:any,time)
  {
    this.t11=amount*this.r1;
    this.t12=amount*this.r2;
    this.t13=amount*this.r3;
    this.t14=amount*this.r4;
    this.t21=(1.0)+parseFloat(this.r1);
    this.t22=(1.0)+parseFloat(this.r2);
    this.t23=(1.0)+parseFloat(this.r3);
    this.t24=(1.0)+parseFloat(this.r4);
    for(let i=1;i<=time;i++)
    {
      this.t31=(this.t21*this.t31);
      this.t32=(this.t22*this.t32);
      this.t33=(this.t23*this.t33);
      this.t34=(this.t24*this.t34);
    }
    this.emi1=(this.t11*(this.t31/(this.t31-1)))/12;
    this.emi2=(this.t12*(this.t32/(this.t32-1)))/12;
    this.emi3=(this.t13*(this.t33/(this.t33-1)))/12;
    this.emi4=(this.t14*(this.t34/(this.t34-1)))/12;

    this.totAmount1=parseFloat(amount)+this.emi1*time;
    this.totAmount2=parseFloat(amount)+this.emi2*time;
    this.totAmount3=parseFloat(amount)+this.emi3*time;
    this.totAmount4=parseFloat(amount)+this.emi4*time;
  }
  

  ngOnInit() {
    
  }
  
  
  changeSbiBusinessRate(){
   return this.local.retrieve('SBIBR');
    // return this.rate.br;
  
    
  }
}
