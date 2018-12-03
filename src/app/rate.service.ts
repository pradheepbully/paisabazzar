import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor() { } 

br;
businessRate(interest){
this.br = interest;
}

cr;
carRate(interest){
  this.cr=interest;
}

er;
educationRate(interest){
  this.er=interest;
}

gr;
goldRate(interest){
  this.gr=interest;
}

hr;
homeRate(interest){
  this.hr=interest;
}

pr;
personalRate(interest){
  this.pr=interest;
}
}
