import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessloanComponent } from './businessloan/businessloan.component';
import { EducationloanComponent } from './educationloan/educationloan.component';
import { CarloanComponent } from './carloan/carloan.component';
import { GoldloanComponent } from './goldloan/goldloan.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { ViewComponent } from './admin/view/view.component';
import { SbiComponent } from './admin/sbi/sbi.component';

const routes: Routes = [
  {
    path:'businessloan',
    component:BusinessloanComponent
  },
  {
    path:'carloan',
    component:CarloanComponent
  },
  {
    path:'educationloan',
    component:EducationloanComponent
  },
  {
    path:'goldloan',
    component:GoldloanComponent
    
  },
  {
    path:'personalloan',
    component:PersonalloanComponent
  },
  {
    path:'homeloan',
    component:HomeloanComponent
  },
  {
    path:'adminmoduleview',
    component:ViewComponent
  },
  {
    path:'adminmodulesbi',
    component:SbiComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
