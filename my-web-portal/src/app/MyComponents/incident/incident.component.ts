import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  public posts: any[] = []
  usermessage!: string;
  check = false
  constructor(private userservice: UserService,private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData():void {
    if(localStorage.getItem('Loginuser')){
      let obj = JSON.parse(localStorage.getItem('Loginuser') || "{}")
      this.getuserPost(obj.token);
      this.check = true
    }else{
      this.usermessage= "Please sign in to see the incidents"
      this.check = false
    }
  }

  getuserPost(token:string) {
    this.userservice.getpost(token).subscribe((res) => {
      this.posts = res
      },(err) => {alert("something went wrong! Please try again");}
    )
  }
 
}
