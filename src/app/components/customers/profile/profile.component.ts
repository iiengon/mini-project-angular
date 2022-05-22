import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  listNavMenu =  [
    {
      name: 'Order history',
      link: 'order-history',
      active: true
    },
    {
      name: 'Favorite',
      link: 'favorite',
      active: false
    },
    {
      name: 'Shippong address',
      link: 'shipping',
      active: false
    },
    {
      name: 'Profile',
      link: 'profile',
      active: false
    },
    {
      name: 'Sign out',
      link: 'sing-out',
      active: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onClickNav(nav:any){
    this.listNavMenu.forEach((navs:any)=> {
      return navs.active = false
    })
    nav.active = true;
  }
}
