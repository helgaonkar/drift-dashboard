import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search:string="";
  logo="assets/logo-white.png"

  image="assets/Image/download.png";

  getsearch(){}
 

}
