import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  show: boolean = false;
  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
        name : ['',Validators.required],
        email: ['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
        username: ['',Validators.required],
        password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  showPassword(){
    this.show = !this.show;
  }
  submit(){
    this.markFormGroupTouched(this.myForm);
    if(this.myForm.invalid) return
    console.log(this.myForm.value)
  }
   markFormGroupTouched(form: FormGroup) {
    for(let i in form.controls){
    form.controls[i].markAsTouched();
    }

  }
}
