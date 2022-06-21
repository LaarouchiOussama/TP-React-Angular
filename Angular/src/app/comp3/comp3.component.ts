import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  date: Date = new Date();
  nombre: number = 0;
  message: string = "";

  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
    this.nombre = 101;
    this.message = "Hello my Students";
  }

}
