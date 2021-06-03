import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  carouselImages = [
    {
      path:"./assets/img/portfolio-2.jpg",
      title:"carouselImage"
    },
    {
      path:"./assets/img/portfolio-3.jpg",
      title:"carouselImage"
    },
    {
      path:"./assets/img/portfolio-7.jpg",
      title:"carouselImage"
    },
    {
      path:"./assets/img/portfolio-8.jpg",
      title:"carouselImage"
    },
  ];

  features = [
    {
      path:"assets/img/icon.png",
      seal:"Image of Seal",
      title:"WEBDESIGN",
      desc:"Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring."
    },
    {
      path:"assets/img/icon.png",
      seal:"Image of Seal",
      title:"PRINT",
      desc:"Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an."
    },
    {
      path:"assets/img/icon.png",
      seal:"Image of Seal",
      title:"SEO AND SEM",
      desc:"Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect."
    },
    {
      path:"assets/img/icon.png",
      seal:"Image of Seal",
      title:"CONSULTING",
      desc:"Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring."
    },
    {
      path:"assets/img/icon.png",
      seal:"Image of Seal",
      title:"EMAIL MARKETING",
      desc:"Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an."
    },
    {
      path:"assets/img/icon.png",
      seal:"Image of Seal",
      title:"UX",
      desc:"Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect."
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
