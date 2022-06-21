import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "This is the title of the home component";

  tab : number[] = [1,2,3,4,5,6,7,8,9,10];

  moyenne: number[] = [10, 13, 9, 19, 6];

  constructor() {}

  ngOnInit(): void {
  }

}
