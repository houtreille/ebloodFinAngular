import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InterestRateListComponent} from "./component/interest-rate-list/interest-rate-list.component";
import {InterestRateFormComponent} from "./component/interest-rate-form/interest-rate-form.component";

const routes: Routes = [
  { path: 'interestRates', component: InterestRateListComponent },
  { path: 'addInterestRate', component: InterestRateFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
