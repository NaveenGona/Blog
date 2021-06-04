import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  catagories = [
    {
      title:"Categories",
      children:[
        {
          path:"#",
          title:"Accordions"
        },
        {
          path:"#",
          title:"Alerts"
        },{
          path:"#",
          title:"Buttons"
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
    }
  ];

  accordian = [
    {
      path:"#collapseOne",
      title:"Accordion Item No.1",
      children:[
        {
          imgpath:"assets/img/template-easy-code.png",
          seal:"Image of seal",
          pp:[
            "It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.",
            "It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad."
          ]
        }
      ]
      },
        {
          path:"#collapseTwo",
          title:"Accordion Item No.2",
          children:[
            {
              imgpath:"assets/img/template-easy-code.png",
              seal:"Image of seal",
              pp:[
                "It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.",
                "It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad."
              ]
            },
          ]
        },
        {
          path:"#collapseThree",
          title:"Accordion Item No.3 A little too small",
          children:[
            {
              imgpath:"assets/img/template-easy-code.png",
              seal:"Image of seal",
              pp:[
                "His room, a proper human room although a little too small, lay peacefully between its four familiar walls.<br>A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.",
              ]
            },
          ]
        },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
