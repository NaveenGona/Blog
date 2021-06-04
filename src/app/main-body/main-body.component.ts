import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  carouselImages = [
    {
      path:"assets/img/portfolio-2.jpg",
      title:"carouselImage",
      prev:"Previous",
      next:"Next"
    },
    {
      path:"assets/img/portfolio-3.jpg",
      title:"carouselImage",
      prev:"Previous",
      next:"Next"
    },
    {
      path:"assets/img/portfolio-7.jpg",
      title:"carouselImage",
      prev:"Previous",
      next:"Next"
    },
    {
      path:"assets/img/portfolio-8.jpg",
      title:"carouselImage",
      prev:"Previous",
      next:"Next"
    },
  ];

  features = [
    {
      icon:"desktop",

      title:"WEBDESIGN",
      desc:"Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring."
    },
    {
      icon:"print",

      title:"PRINT",
      desc:"Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an."
    },
    {
      icon:"globe",

      title:"SEO AND SEM",
      desc:"Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect."
    },
    {
      icon:"lightbulb-o",

      title:"CONSULTING",
      desc:"Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring."
    },
    {
      icon:"envelope-o",

      title:"EMAIL MARKETING",
      desc:"Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an."
    },
    {
      icon:"user",

      title:"UX",
      desc:"Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect."
    },
  ];

  testmonials=[
    {
      title: "Testimonials",
      desc:"We have worked with many clients and we always like to hear they come out from the cooperation happy and satisfied. Have a look what our clients said about us.",
      children: [
    {
    
      desc:"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
      icon:"left",
      name:"John McIntyre",
      disig:"CEO, TransTech",
      path:"assets/img/person-1.jpg",
      seal:"Image"

    },
    {
      desc:"The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. What's happened to me?  he thought. It wasn't a dream.",
      icon:"left",
      name:"John McIntyre",
      disig:"CEO, TransTech",
      path:"assets/img/person-1.jpg",
      seal:"Image"

    },
    {
      desc:"His room, a proper human room although a little too small, lay peacefully between its four familiar walls.",
      icon:"left",
      name:"John McIntyre",
      disig:"CEO, TransTech",
      path:"assets/img/person-1.jpg",
      seal:"Image"

    },
    {
      desc:"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
      icon:"left",
      name:"John McIntyre",
      disig:"CEO, TransTech",
      path:"assets/img/person-1.jpg",
      seal:"Image"

    },
    {
      desc:"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
      icon:"left",
      name:"John McIntyre",
      disig:"CEO, TransTech",
      path:"assets/img/person-1.jpg",
      seal:"Image"

    },
  ]
  }
  ];
  moreinfo=[
    {
      imgurl:"assets/img/fixed-background-2.jpg",
      icon:"code-o",
      title:"Do you want to see more?",
      desc:"We have prepared for you more than 40 different HTML pages, including 5 variations of homepage.",
      path:"#",
      text:"See another homepage"
    }
  ];

  aboutmore=[
    {
      title: "From the blog",
      desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      path:"#",
      text:"Check our blog",
      children: [
    {
      imgurl:"assets/img/portfolio-3.jpg",
      seal:"Image",
      path:"#",
      title:"Fashion Now",
      name:"John Snow",
      icon:"chain",
      readmore:"Read More",
      desc:"Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring.",
      continue:"Continue reading",
    },
    {
      imgurl:"assets/img/portfolio-4.jpg",
      seal:"Image",
      path:"#",
      title:"5 ways to look awesome",
      name:"John Snow",
      icon:"chain",
      readmore:"Read More",
      desc:"Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring.",
      continue:"Continue reading",
    },
    {
      imgurl:"assets/img/portfolio-5.jpg",
      seal:"Image",
      path:"#",
      title:"WHAT TO DO",
      name:"John Snow",
      icon:"chain",
      readmore:"Read More",
      desc:"Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring.",
      continue:"Continue reading",
    },
    {
      imgurl:"assets/img/portfolio-6.jpg",
      seal:"Image",
      path:"#",
      title:"Fashion Now",
      name:"John Snow",
      icon:"chain",
      readmore:"Read More",
      desc:"Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring.",
      continue:"Continue reading",
    },
    
  ]
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
  sites=[
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
