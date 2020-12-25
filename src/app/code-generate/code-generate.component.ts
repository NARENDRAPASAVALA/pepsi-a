import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-generate',
  templateUrl: './code-generate.component.html',
  styleUrls: ['./code-generate.component.css']
})
export class CodeGenerateComponent implements OnInit {

  constructor(private router: Router) {
    // (<any>$("#input-id")).rating();
   }

  ngOnInit() {
  }

  public Next() {
    this.router.navigate(['/spin'])
  }

}
