import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {ValidateForm} from '../../helpers/vaildators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  type:string = "password";
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash"
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router){}
  ngOnInit():void{

  this.loginForm = this.fb.group({
    userName:["",Validators.required],
    password:["",Validators.required],

   })
  }

  showHidden(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon= "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"
  }
  OnLogin(){
    if(this.loginForm.invalid){
      ValidateForm.vaildAllFormFileds(this.loginForm);

      alert("Form's is invalid ")
      return ;
    }
    else{
      // console.log(this.loginForm.value);
   this.auth.login(this.loginForm.value).subscribe({
    next:(res:any)=>{
      alert(res.message);
      this.loginForm.reset();
      this.router.navigate(['/dashboard']);
    },
    error:(err)=>{
      alert(err?.error.message)
    }

   })

    }
  }

}
