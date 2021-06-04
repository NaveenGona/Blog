import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  contact = "Contact us on +420 777 555 333 or hello@universal.com.";

  testlinks = [
    {
      path: '#',
      title: 'Home',
      children: [
        {
          path:"#",
          title:"Option 1: Default Page"
        },
        {
          path:"#",
          title:"Option 2: Application"
        },
        {
          path:"#",
          title:"Option 3: Startup"
        },
        {
          path:"#",
          title:"Option 4: Agency"
        },
        {
          path:"#",
          title:"Dropdown link",
          children:[
            {
              path:"#",
              title:"Option 4: Agency"
            },
            {
              path:"#",
              title:"Option 4: Agency"
            }
            ,{
              path:"#",
              title:"Option 4: Agency"
            }
          ]
        }
      ]
  },
  {
    path:"#",
    title: "Features",
    isfeatureddropdown:true,
    children: [
      {
        path:"assets/img/template-easy-customize.png",
        seal:"Image",
        title:"Shortcodes",
        children:[
          {
            path:"#",
            title:"Accordions"
          },
          {
            path:"#",
            title:"Alerts"
          },
          {
            path:"#",
            title:"Content boxes"
          },
          {
            path:"#",
            title:"Horizontal blocks"
          },
          {
            path:"#",
            title:"Pagination"
          },
          {
            path:"#",
            title:"Tabs"
          },
          {
            path:"#",
            title:"Typography"
          }
        ]
  
      },
      {
        path: '#',
        title:"Header variations",
        children:[
          {
            path:"#",
            title:"Default sticky header"
          },
          {
            path:"#",
            title:"No sticky header"
          },
          {
            path:"#",
            title:"Light header"
          },
        ]
      }
    ]
    
  },
  {
    path:"#",
    title: "Pricing",
    children:[
      {
        path:"#",
        title:"2 columns"
      },
      {
        path:"#",
        title:"2 columns with negative space"
      },
      {
        path:"#",
        title:"3 columns"
      },
      {
        path:"#",
        title:"3 columns with negative space"
      },
      {
        path:"#",
        title:"4 columns"
      },
      {
        path:"#",
        title:"4 columns with negative space"
      },
      {
        path:"#",
        title:"Portfolio - detail"
      },
      {
        path:"#",
        title:"Portfolio - detail 2"
      },
    ]
    
  },
  {
    path:"#",
    title: "All Pages",
    children: [
      {
        path:"#",
        title:"Option 1: Default Page"
      },
      {
        path:"#",
        title:"Option 2: Application"
      },
      {
        path:"#",
        title:"Option 3: Startup"
      },
      {
        path:"#",
        title:"Option 4: Agency"
      },
    ]
  },
  {
    path:"#",
    title: "Contact"
  }
];

title="universal";
navLinks = [
  {
    path:"#",
    title: "Features",
    
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


  contactLinks = [
    {
      path:"#",
      icon:"phone"
    },
    {
      path:"#",
      icon:"envelope"
    }
  ];
  smediaLinks = [
    {
      path:"#",
      icon:"facebook"
    },
    {
      path:"#",
      icon:"google-plus"
    },
    {
      path:"#",
      icon:"twitter"
    },
    {
      path:"#",
      icon:"envelope"
    }
  ];

  homePages = [
    {
      path:"#",
      title:"Option 1: Default Page"
    },
    {
      path:"#",
      title:"Option 2: Application"
    },
    {
      path:"#",
      title:"Option 3: Startup"
    },
    {
      path:"#",
      title:"Option 4: Agency"
    },
    {
      path:"#",
      title:"Dropdown link",
      children:[
        {
          path:"#",
          title:"Option 4: Agency"
        },
        {
          path:"#",
          title:"Option 4: Agency"
        }
        ,{
          path:"#",
          title:"Option 4: Agency"
        }
      ]
    },
    {
      path:"#",
      title: "Features",
      children: [
        {
          path:"assets/img/template-easy-customize.png",
          seal:"Image",
          title:"Shortcodes",
          children:[
            {
              path:"#",
              title:"Accordions"
            },
            {
              path:"#",
              title:"Alerts"
            },
            {
              path:"#",
              title:"Content boxes"
            },
            {
              path:"#",
              title:"Horizontal blocks"
            },
            {
              path:"#",
              title:"Pagination"
            },
            {
              path:"#",
              title:"Tabs"
            },
            {
              path:"#",
              title:"Typography"
            }
          ]
    
        },
        
      ]
      
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

  featuresLinks=[
    {
      path:"assets/img/template-easy-customize.png",
      seal:"Image",
      title:"Shortcodes",
      children:[
        {
          path:"#",
          title:"Accordions"
        },
        {
          path:"#",
          title:"Alerts"
        },
        {
          path:"#",
          title:"Content boxes"
        },
        {
          path:"#",
          title:"Horizontal blocks"
        },
        {
          path:"#",
          title:"Pagination"
        },
        {
          path:"#",
          title:"Tabs"
        },
        {
          path:"#",
          title:"Typography"
        }
      ]

    },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
