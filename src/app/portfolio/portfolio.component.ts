import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  headerimage = [
    {
      title:"Portfolio - 2 columns",
     children:[
       {
             path:"#",
             title:"Home"

       },
       {
         title:"Portfolio - 2 columns"
       }
     ]
    }
  ];

  portfolio = [
    {
      title:"Portfolio",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
    }
  ];
  portfolioimages = [
    {
      imgpath:"assets/img/portfolio-1.jpg",
      seal:"Image of portfolio",
      path:"portfolio-detail.html",
      title:"Portfolio item",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada",
      descpath:"<a href='portfolio-detail.html' class='btn btn-template-outlined-white'>View</a><a href='#' class='btn btn-template-outlined-white'>Website</a>"
    },
    {
      imgpath:"assets/img/portfolio-2.jpg",
      seal:"Image of portfolio",
      path:"portfolio-detail.html",
      title:"Portfolio item",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada",
      descpath:"<a href='portfolio-detail.html' class='btn btn-template-outlined-white'>View</a><a href='#' class='btn btn-template-outlined-white'>Website</a>"
    },
    {
      imgpath:"assets/img/portfolio-3.jpg",
      seal:"Image of portfolio",
      path:"portfolio-detail.html",
      title:"Portfolio item",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada",
      descpath:"<a href='portfolio-detail.html' class='btn btn-template-outlined-white'>View</a><a href='#' class='btn btn-template-outlined-white'>Website</a>"
    },
    {
      imgpath:"assets/img/portfolio-4.jpg",
      seal:"Image of portfolio",
      path:"portfolio-detail.html",
      title:"Portfolio item",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada",
      descpath:"<a href='portfolio-detail.html' class='btn btn-template-outlined-white'>View</a><a href='#' class='btn btn-template-outlined-white'>Website</a>"
    },
    {
      imgpath:"assets/img/portfolio-5.jpg",
      seal:"Image of portfolio",
      path:"portfolio-detail.html",
      title:"Portfolio item",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada",
      descpath:"<a href='portfolio-detail.html' class='btn btn-template-outlined-white'>View</a><a href='#' class='btn btn-template-outlined-white'>Website</a>"
    },
    {
      imgpath:"assets/img/portfolio-6.jpg",
      seal:"Image of portfolio",
      path:"portfolio-detail.html",
      title:"Portfolio item",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada",
      descpath:"<a href='portfolio-detail.html' class='btn btn-template-outlined-white'>View</a><a href='#' class='btn btn-template-outlined-white'>Website</a>"
    },
    {
      imgpath:"assets/img/portfolio-7.jpg",
      seal:"Image of portfolio",
      path:"portfolio-detail.html",
      title:"Portfolio item",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada",
      descpath:"<a href='portfolio-detail.html' class='btn btn-template-outlined-white'>View</a><a href='#' class='btn btn-template-outlined-white'>Website</a>"
    },
    {
      imgpath:"assets/img/portfolio-9.jpg",
      seal:"Image of portfolio",
      path:"portfolio-detail.html",
      title:"Portfolio item",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada",
      descpath:"<a href='portfolio-detail.html' class='btn btn-template-outlined-white'>View</a><a href='#' class='btn btn-template-outlined-white'>Website</a>"
    },
  ];

  clients = [
    {
      icon:"align-justify",
      count:"580",
      sites:"Websites"
    },
    {
      icon:"users",
      count:"100",
      sites:"Satisfied Clients"
    },
    {
      icon:"copy",
      count:"320",
      sites:"Projects"
    },
    {
      icon:"font",
      count:"923",
      sites:"Magazines and Brochures"
    }
  ];

  ourclients = [
    {
      title:"Our Clients",
      children:[
        {
          path:"assets/img/customer-1.png",
          seal:"image"
        },
        {
          path:"assets/img/customer-2.png",
          seal:"image"
        },
        {
          path:"assets/img/customer-3.png",
          seal:"image"
        },
        {
          path:"assets/img/customer-4.png",
          seal:"image"
        },
        {
          path:"assets/img/customer-5.png",
          seal:"image"
        },
        {
          path:"assets/img/customer-6.png",
          seal:"image"
        },
      ]
      
    }
    
  ];
  success=[
    {
      title:"Do you want cool website like this one?",
      path:"#",
      text:"Buy this template now"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
