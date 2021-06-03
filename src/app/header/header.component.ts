import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title="universal";
  navLinks = [
    {
      path:"#",
      title: "Features"
    },
    {
      path:"#",
      title: "Pricing"
    },
    {
      path:"#",
      title: "FAQs"
    },
    {
      path:"#",
      title: "About"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
