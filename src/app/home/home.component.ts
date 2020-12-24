import { Component, OnInit } from '@angular/core';
// import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public about() {
    this.router.navigate(['/about'])
  }
}
