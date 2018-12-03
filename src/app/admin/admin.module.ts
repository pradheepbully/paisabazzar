import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { SbiComponent } from './sbi/sbi.component';


@NgModule({
  imports: [
    CommonModule,
    
  ],
  exports:[
      ViewComponent,
      SbiComponent

  ],
  declarations: [ViewComponent, SbiComponent]
})
export class AdminModule { }
