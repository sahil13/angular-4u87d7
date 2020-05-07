import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

loginForm;
  constructor(private fb:FormBuilder) {

this.loginForm=fb.group({
  product_name:['',[Validators.required,Validators.maxLength(5),Validators.minLength(3),Validators.pattern('sahil')]],
  product_price: new FormControl(),
  product_desc:new FormControl()
})

   }

   

  ngOnInit() {
  }

}