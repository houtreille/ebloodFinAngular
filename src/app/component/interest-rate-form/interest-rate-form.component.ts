import { Component } from '@angular/core';
import {InterestRate} from "../../model/rate/interest-rate";
import {InterestRateService} from "../../service/interest-rate.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-interest-rate-form',
  templateUrl: './interest-rate-form.component.html',
  styleUrls: ['./interest-rate-form.component.css']
})

export class InterestRateFormComponent {

  interestRate: InterestRate;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private interestRateService: InterestRateService) {
    this.interestRate = new InterestRate();
  }

  onSubmit() {
    this.interestRateService.save(this.interestRate).subscribe(result => this.gotoInterestRateList());
  }

  gotoInterestRateList() {
    this.router.navigate(['/interestRate']);
  }


}
