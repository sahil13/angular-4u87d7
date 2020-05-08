import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
index=0;
product=[{
	"name": "lux",
	"desc": "Indulge in a sensorial experience with breakthrough Floral Beauty Oil that gives you a fragrance bloom two times better than real flowers.",
	"location": [{
		"street": "123",
		"city": "gurgaon"
	}],
	"img": "https://www.hul.co.in/Images/India-LUX-new-hand-wash-collection-310818_tcm1255-525690.jpg",
	"price": "70"
},{
	"name": "Nirma",
	"desc": "Indulge in a sensorial experience with breakthrough Floral Beauty Oil that gives you a fragrance bloom two times better than real flowers.",
	"location": [{
		"street": "123",
		"city": "gurgaon"
	}],
	"img": "https://i.ebayimg.com/images/g/BkgAAOSw-BtcxTro/s-l300.jpg",
	"price": "70"
}];

products;
  constructor() {
    this.products=this.product;
  }

  ngOnInit() {
  }

}