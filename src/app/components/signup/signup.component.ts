import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {ValidateForm} from '../../helpers/vaildators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  type:string = "password";
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash"
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router){}
  signForm:FormGroup
  ngOnInit():void{
   this.signForm = this.fb.group({
    FirstName:['',Validators.required],
    LastName:['',Validators.required],
    UserName:['',Validators.required],
    Email:['',Validators.required],
    Password:['',Validators.required],
   })
  }
  showHidden(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon= "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password"
  }
  OnSignUP(){
    if(this.signForm.invalid){
       ValidateForm.vaildAllFormFileds(this.signForm);
      alert("Form's is invalid ")
      return ;
    }
    else{
      // console.log(this.signForm.value);
     this.auth.signUP(this.signForm.value).subscribe({
    next:(res:any)=>{
      alert(res.message);
      this.signForm.reset();
      this.router.navigate(['/login']);
       },
    error:(err)=>{
      alert(err?.error.message)
    }
    })
  }

  }
}
