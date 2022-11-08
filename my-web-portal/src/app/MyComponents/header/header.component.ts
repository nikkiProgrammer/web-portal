import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:any=""
isloggedin=false
  constructor(public router: Router) {
    if(localStorage.getItem('Loginuser')){
      this.isloggedin=true;
      let obj = JSON.parse(localStorage.getItem('Loginuser') || "{}")
      this.user = obj.result.name
    }
   }
  onLogout() {  
    localStorage.removeItem('Loginuser');
    this.isloggedin = false;
  } 

  ngOnInit(): void {
   
  }
  
 /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof MyComponent
   */
  hasRoute(route: string) {
    if(localStorage.getItem('Loginuser') && this.isloggedin==false) window.location.reload()
    return this.router.url.includes(route);
  }
    
}
