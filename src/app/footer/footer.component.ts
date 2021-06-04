import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  quickinfo = [
    {
      blogTitle:"BLOG POST NAME",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      subtitle:"Join Our Monthly Newsletter",
      path:"assets/img/blog-avatar.jpg",
      seal:"image",
      blogPath:"#",
    },
  ];

  blogs = [
    {
      blogTitle:"Blog",
      children:[
        {
          path:"assets/img/detailsquare.jpg",
          seal:"image",
          children:[
            {
              path:"#",
              title:"Blog post name"
            }
          ]
        },
        {
          path:"assets/img/detailsquare.jpg",
          seal:"image",
          children:[
            {
              path:"#",
              title:"Blog post name"
            }
          ]
        },
        {
          path:"assets/img/detailsquare.jpg",
          seal:"image",
          children:[
            {
              path:"#",
              title:"Very very long blog post name"
            }
          ]
        }
        
      ],
    },
  ];

  contactinfo=[
    {
      title:"CONTACT",
      company:"UNIVERSAL LTD.",
      plotno:"13/25 NEW AVENUE",
      streetname:"NEWTON UPON RIVER",
      postalCode:"45Y 73J",
      country:"ENGLAND",
      path:"#",
      desc:"Go to contact page"
    }
    
  ];  
  gallery = [
    {
      path:"#",
      imgsrc:"assets/img/detailsquare.jpg",
      seal:"image"
    },
    {
      path:"#",
      imgsrc:"assets/img/detailsquare.jpg",
      seal:"image"
    },
    {
      path:"#",
      imgsrc:"assets/img/detailsquare.jpg",
      seal:"image"
    },
    {
      path:"#",
      imgsrc:"assets/img/detailsquare.jpg",
      seal:"image"
    },
    {
      path:"#",
      imgsrc:"assets/img/detailsquare.jpg",
      seal:"image"
    },
    {
      path:"#",
      imgsrc:"assets/img/detailsquare.jpg",
      seal:"image"
    },
  ];
  copyrights = [
    {
      desc:"2020. Your company / name goes here",
      text:"Template design by",
      path:"https://bootstrapious.com/snippets",
      imgpath:"https://fity.cz/"

    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
