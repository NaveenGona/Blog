import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  aboutTitle = "ABOUT US";
  aboutDesc = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";
  searchHeader = "JOIN OUR MONTHLY NEWSLETTER";
  
  blogHead = "Blog";
  blogPosts = [
    {
      path:"assets/img/blog-avatar.jpg",
      seal:"image",
      blogPath:"#",
      blogTitle:"BLOG POST NAME"
    },
    {
      path:"assets/img/blog-avatar.jpg",
      seal:"image",
      blogPath:"#",
      blogTitle:"BLOG POST NAME"
    },
    {
      path:"assets/img/blog-avatar.jpg",
      seal:"image",
      blogPath:"#",
      blogTitle:"VERY VERY LONG BLOG POST NAME"
    },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
