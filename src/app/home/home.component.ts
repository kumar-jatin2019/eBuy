import { Component, OnInit } from '@angular/core';
 import {Tshirt1} from '../../assets/images/tshirt1.jpg';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 logo = "../../assets/images/tshirt1.jpg";
 
 



 
   items = [
        { id: 1, title: 'Life is a journey', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110}, 
        { id: 2, title: 'Wolf', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, },
        { id: 3, title: 'Old skool', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, },
        { id: 4, title: 'Classic GP500', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260,  },
        { id: 5, title: 'Solar Print', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160,  },
        { id: 6, title: 'Zombie', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90,  },
        { id: 5, title: 'Lion', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160,  },
        { id: 6, title: 'India', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90,  },
        

    ]

  constructor() { }

  ngOnInit(): void {
  }

}
