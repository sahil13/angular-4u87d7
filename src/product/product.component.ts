import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

product=[{
	"name": "lux",
	"desc": "Indulge in a sensorial experience with breakthrough Floral Beauty Oil that gives you a fragrance bloom two times better than real flowers.",
	"location": [{
		"street": "123",
		"city": "gurgaon"
	}],
	"img": "https://images-na.ssl-images-amazon.com/images/I/618oWHEzQ0L._SL1000_.jpg",
	"price": "70"
}];

products;
  constructor() {
    this.products=this.product;
  }

  ngOnInit() {
  }

}