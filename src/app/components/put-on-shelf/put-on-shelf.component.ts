import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-put-on-shelf',
  templateUrl: './put-on-shelf.component.html',
  styleUrls: ['./put-on-shelf.component.scss']
})
export class PutOnShelfComponent implements OnInit {
  @ViewChild('email',{static: false}) email: ElementRef<HTMLInputElement> | undefined
  productCate = ['skincare','makeup','personal care','hair care','bath & body','brush/tools & accessories','fragrance']
  isCollapse = true
  cities2 = [
    {id: 1, name: 'Eveandboy'},
    {id: 2, name: 'Watson'},
    {id: 3, name: 'Shopee'},
    {id: 4, name: 'Lazada'},
    {id: 5, name: 'Mulity Beauty'}
];

  dataValueSelect:any = [
   'Vilnius',
    'Kaunas',
  ]
  myForm: FormGroup;
  errorMessage:any = {
    required: 'this field is required',
    error: 'this custom validator'
  }
  image:any
  defaultImage = './assets/images/defaultimage.png'
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      productName: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      shortDescription: ['',Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.required],
      brand: ['',Validators.required],
      productCate: ['',Validators.required],
      selectedCitiesIds: ['',Validators.required],
      optionProducts: this.fb.group({
        optionName: ['',Validators.required],
        txtTextVauleArray : this.fb.array([
          this.fb.group({
          optionValue: ['',Validators.required],
          optionPrice: ['',Validators.required]
          })
        ])
      }),
      fileImage: ['',Validators.required],
      // email: ['',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]]
    });
  }

  ngOnInit(): void {

  }

  submitForm(){
    // this.txtTextVauleArray.controls.forEach(ctr=>{
    //     ctr.get('optionValue')?.markAsTouched()
    //     ctr.get('optionPrice')?.markAsTouched()
    // })
    this.markAllAsTouched(this.myForm)
    if(this.myForm.invalid) {
      this.isCollapse = false;
      return
    }
    console.log(this.myForm.value)
  }
  //term input text add value
  addCustomUser = (term:any) => ({id: term, name: term});
  onSeclectOption(e:any){
    this.txtTextVauleArray.reset()
  }
  addOptionValue(){
    this.txtTextVauleArray.push(this.fb.group({
      optionValue: ['',Validators.required],
      optionPrice: ['',Validators.required]
    }))
  }
  delOptionValue(index:number){
    if(this.txtTextVauleArray.length<=1 )return;
    this.txtTextVauleArray.removeAt(index)
  }
  getErrorMessage(control:AbstractControl){
    let errorform:any = control.errors
    if(control && control.invalid){
      const errorKey = Object.keys(errorform)[0]
      let errorMessage = this.errorMessage[errorKey]
      switch(errorKey) {
        case 'requried':
          errorMessage = this.errorMessage[errorKey]
        break
      }
      return errorMessage
    }
  }
  markAllAsTouched(form:any) {
    for (const inner in form.controls) {
      form.controls[inner].markAsTouched();
      if (form.controls[inner].controls) {
        this.markAllAsTouched(form.controls[inner]);
      }
    }
  }
  onPriceDecimal(e:any,i?:any){
    console.log(e.target.name)
    let parseValue = parseFloat(e.target.value).toFixed(2);
    if(e.target.name === 'optionPrice'){
      this.txtTextVauleArray.at(i).get('optionPrice')?.setValue(parseValue)
    }else{
      this.myForm.get('price')?.setValue(parseValue)
    }
  }
  fnSelectImage(event:any){
    const reader = new FileReader();
    const file = event.target.files[0];
    console.log(file)
    reader.readAsDataURL(file)
    reader.onload = (e:any) => {
      this.image = e.target.result
    }
    this.myForm.get('fileImage')?.setValue(file)
    const formData = new FormData();
    formData.append('file',file)
    //call api

  }
  fnSwitch(){
    // console.log(this.switch)
    // this.switch = !this.switch
  }
  get productName(){
    return this.myForm.get('productName')
  }
  get description(){
    return this.myForm.get('description')
  }
  get shortDescription(){
    return this.myForm.get('shortDescription')
  }
  get txtTextVauleArray(){
    return this.myForm.get('optionProducts')?.get('txtTextVauleArray') as FormArray;
  }
  get getbrand(){
    return this.myForm.get('brand')
  }
}
