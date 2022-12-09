import {Component, OnInit} from '@angular/core';
import {InterestRate} from "../../model/rate/interest-rate";
import { InterestRateService } from "../../service/interest-rate.service";

@Component({
  selector: 'app-interest-rate-list',
  templateUrl: './interest-rate-list.component.html',
  styleUrls: ['./interest-rate-list.component.css']
})
export class InterestRateListComponent implements OnInit {

  interestRates: InterestRate[];

  constructor(private interestRateService: InterestRateService) {
    this.interestRates = [];
  }

  ngOnInit(): void {
    this.interestRateService.findAll().subscribe(data => {
      this.interestRates = data;
    });
  }


}
