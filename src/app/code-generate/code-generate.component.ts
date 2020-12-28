import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-code-generate',
  templateUrl: './code-generate.component.html',
  styleUrls: ['./code-generate.component.css'],
  providers: [NgbRatingConfig]
})
export class CodeGenerateComponent implements OnInit {
  currentRate = 1;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;


  constructor(private router: Router, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
    // (<any>$("#input-id")).rating();
   }

  ngOnInit() {
  }

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
  public Next() {
    this.router.navigate(['/spin'])
  }

}
