import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Logininfo } from 'src/app/account/logininfo';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;
  datasaved = false;
  message!: string;
  status!: string;
  
  constructor(private formbuilder: FormBuilder, private userservice: UserService,private router:Router) { }
 
  ngOnInit(): void {
    this.setFormState();
  } 

  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
 
  onSubmit():void {
    

    let userinfo = this.loginForm.value;
    this.userLogin(userinfo);
    this.loginForm.reset();
   
  }

  userLogin(logininfo:Logininfo) {
    this.userservice.userlogin(logininfo).subscribe((resResult)=>{
       let resp=JSON.stringify(resResult);
       console.log(resp);
        this.datasaved = true;
        this.message = resResult["msg" as keyof typeof resResult];
        this.status = resResult['status' as keyof typeof resResult];
        if(resResult['status' as keyof typeof resResult]=='success'){
          localStorage.setItem('Loginuser',resp)
          this.router.navigate(['/']);
        }else{
          localStorage.removeItem('Loginuser');
        }
       this.loginForm.reset();
      },(error)=>{alert("email or password is incorrect."); this.router.navigate(["/login"])}
    )
  }

}
