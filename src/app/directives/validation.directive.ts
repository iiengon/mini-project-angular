import { Directive, HostBinding, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective {
  errorMessage:any = {
    required: 'this field is required',
    error: 'this custom validator',
    pattern: 'this is incorrect pattern'
  }
  constructor() { }
  @Input('appValidation') control:AbstractControl | undefined;
  @HostBinding('class') class:string = 'invalid-feedback'
  @HostBinding('innerText') text:any;
  ngOnChanges(){
    if(!this.control) return
    this.text = this.getErrorMessage();
    //input control realtime

    this.control.valueChanges.subscribe(()=> this.text = this.getErrorMessage())

  }



  getErrorMessage(){
    let errorform:any = this.control?.errors
    if(this.control && this.control.invalid){
      const errorKey = Object.keys(errorform)[0]
      let errorMessage = this.errorMessage[errorKey]
      switch(errorKey) {
        case 'requried':
          errorMessage = this.errorMessage[errorKey]
        break
        case 'pattern':
          errorMessage = this.errorMessage[errorKey]
        break
      }
      return errorMessage
    }
  }
}
