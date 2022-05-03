import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '@mnproject/service/api/product.service';
@Component({
  selector: 'app-edit-put-on-shelf',
  templateUrl: './edit-put-on-shelf.component.html',
  styleUrls: ['./edit-put-on-shelf.component.scss']
})
export class EditPutOnShelfComponent implements OnInit {
  productCates = ['skincare','makeup','personal care','hair care','bath & body','brush/tools & accessories','fragrance']
  cities2 = [
    {id: 1, name: 'Eveandboy'},
    {id: 2, name: 'Watson'},
    {id: 3, name: 'Shopee'},
    {id: 4, name: 'Lazada'},
    {id: 5, name: 'Mulity Beauty'}
];

  dataValueForm = {
    brand: "Mac",
    description: "เซรั่มฟื้นบำรุงผิวยามค่ำคืนอันดับ#1 ด้วยพลังแห่งการฟื้นบำรุงผิวอย่างรวดเร็วสู่ผิวใหม่ที่ดูอ่อนเยาว์",
    optionProducts: {
      optionName: "size",
      txtTextVauleArray: [
        {
          optionPrice: 4275.00,
          optionValue: "50 ML"
        },
        {
          optionPrice: 2750.00,
          optionValue: "30 ML"
        }
      ]
    },
    price: 4275.00,
    productCate: "skincare",
    dataValueSelect:['Eveandboy','Watson','Mulity Beauty'],
    productName: "ESTEE LAUDER",
    shortDescription: "Advanced Night Repair"
  }
  myForm: FormGroup;
  editAction: boolean = true
  isSubmit:boolean = false
  constructor(private fb: FormBuilder, private productService:ProductService) {
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
          //เป็น arry ไม่ต้องสร้าง form value เปล่าๆ
          // this.fb.group({
          // optionValue: ['',Validators.required],
          // optionPrice: ['',Validators.required]
          // })
        ])
      })

    });
  }

  ngOnInit(): void {
    this.setValueForm();
    this.getUsers()
  }
  getUsers(){
    // this.productService.getUsers().subscribe(resonse =>{
    //   console.log('response',resonse)
    // })
  }
  addCustomUser = (term:any) => ({id: term, name: term});
  setValueForm(){
    this.myForm.disable()
    this.productName?.setValue(this.dataValueForm.productName)
    this.shortDescription?.setValue(this.dataValueForm.shortDescription)
    this.optionProducts?.get('optionName')?.setValue(this.dataValueForm.optionProducts.optionName)
    this.productCate?.setValue(this.dataValueForm.productCate)
    // กรณี ไม่ได้ set Validators ตั้งแต่ intial form
    // this.shortDescription?.setValidators([Validators.required])
    // this.shortDescription?.updateValueAndValidity();
    this.description?.setValue(this.dataValueForm.description)
     this.myForm.get('selectedCitiesIds')?.setValue(this.dataValueForm.dataValueSelect)
    this.price?.setValue(this.dataValueForm.price.toFixed(2))
    this.getbrand?.setValue(this.dataValueForm.brand)
    this.dataValueForm.optionProducts.txtTextVauleArray.map(item =>{
      this.txtTextVauleArray.push(this.fb.group({
        // optionValue: [item.optionValue,[Validators.required]],
        // optionPrice: [item.optionPrice,[Validators.required]]

        //set value,Validator and set fields disable
        optionValue: [{value: item.optionValue,disabled:true},[Validators.required]],
        optionPrice: [{value: item.optionPrice.toFixed(2),disabled:true},Validators.required]
      }))
    })
    // กรณี ให้ disable
    // this.txtTextVauleArray.controls.forEach(v=>{
    //   v.disable();

    // })
  }

  submitForm(){
    this.isSubmit = true
    this.markAllAsTouched(this.myForm)
    if(this.myForm.invalid) return
    console.log('Submit',this.myForm.value)
  }
  editForm(){
    this.editAction = !this.editAction
    console.log(this.editAction)
    if(this.editAction == true){
      this.myForm.disable()
    }else{
      this.myForm.enable()
    }

    //กรณี enable แค่ txtTextVauleArray
    // this.txtTextVauleArray.controls.forEach((item,i)=>{
    //   item.enable()
    // })

  }
  cancelForm(){
    this.editAction = true
    // clear value txtTextVauleArray
    this.txtTextVauleArray.clear()
    this.setValueForm();
    this.myForm.disable();
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

  markAllAsTouched(form:any) {
    for (const inner in form.controls) {
      form.controls[inner].markAsTouched();
      if (form.controls[inner].controls) {
        this.markAllAsTouched(form.controls[inner]);
      }
    }
  }
  onPriceDecimal(e:any,i?:any){
    let parseValue = parseFloat(e.target.value).toFixed(2);
    if(e.target.name === 'optionPrice'){
      this.txtTextVauleArray.at(i).get('optionPrice')?.setValue(parseValue)
    }else{
      this.myForm.get('price')?.setValue(parseValue)
    }
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
  get price(){
    return this.myForm.get('price')
  }
  get optionProducts(){
    return this.myForm.get('optionProducts')
  }
  get productCate(){
    return this.myForm.get('productCate')
  }
}
