import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Postinfo } from 'src/app/account/postinfo';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-currentstatus',
  templateUrl: './currentstatus.component.html',
  styleUrls: ['./currentstatus.component.css']
})
export class CurrentstatusComponent implements OnInit {

  postForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private userservice: UserService,private router:Router) { }

  ngOnInit(): void {
    this.setFormState();
  }

  setFormState(): void {
    this.postForm = this.formbuilder.group({
       date: ['', [Validators.required]],
       title: ['', [Validators.required]],
       message: ['', [Validators.required]],
    })
  }
  

  onSubmit():void {
    if(localStorage.getItem('Loginuser')){
      let obj = JSON.parse(localStorage.getItem('Loginuser') || "{}")
      let postinfo = this.postForm.value;
      this.createuserPost(postinfo,obj.token);
      this.postForm.reset();
    }else{
      alert("Please login to post incident"!)
    }
  }

  createuserPost(postInfo:Postinfo,token:string) {
    this.userservice.createpost(postInfo,token).subscribe((res) => {
        this.postForm.reset();
        this.router.navigate(['/incident']);
      },(err) => {alert("something went wrong! Please try again");}
    )
  }
}
