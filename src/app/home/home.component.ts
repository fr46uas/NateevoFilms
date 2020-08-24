import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    setTimeout(() => {
      window.scrollTo({
        top: 950,
        left: 0,
        behavior: 'smooth'
      });
    }, 500);
  }

}
