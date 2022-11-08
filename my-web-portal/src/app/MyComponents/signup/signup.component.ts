import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/account/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  regForm!: FormGroup;
  datasaved = false;
  message!: string;
  constructor(private formbuilder: FormBuilder, private userservice: UserService,private router:Router) { }

  ngOnInit(): void {
    this.setFormState();
  }

  setFormState(): void {
    this.regForm = this.formbuilder.group({
       name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit():void {
    let userinfo = this.regForm.value;
    this.createuserAccount(userinfo);
    this.regForm.reset();
    
  }

  createuserAccount(userInfo:User) {
    this.userservice.createuser(userInfo).subscribe((res) => {
        this.datasaved = true;
        this.message = "User Created";
        this.regForm.reset();
        localStorage.setItem("Loginuser",JSON.stringify(res))
        this.router.navigate(['/']);
      },(error)=>{alert("something went wrong, please try again.");this.router.navigate(["/register"])}

    )
  }
}
