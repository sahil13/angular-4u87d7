import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

product=[{
  "id":1,
	"name": "lux",
	"desc": "Indulge in a sensorial experience with breakthrough Floral Beauty Oil that gives you a fragrance bloom two times better than real flowers.",
	"location": [{
		"street": "123",
		"city": "gurgaon"
	}],
	"img": "https://www.hul.co.in/Images/India-LUX-new-hand-wash-collection-310818_tcm1255-525690.jpg",
	"price": "70"
},{
  "id":2,
	"name": "lux",
	"desc": "Indulge in a sensorial experience with breakthrough Floral Beauty Oil that gives you a fragrance bloom two times better than real flowers.",
	"location": [{
		"street": "123",
		"city": "gurgaon"
	}],
	"img": "https://www.hul.co.in/Images/India-LUX-new-hand-wash-collection-310818_tcm1255-525690.jpg",
	"price": "70"
}];

  constructor() {
    console.log(this.product);
   }

  ngOnInit() {
  }

}