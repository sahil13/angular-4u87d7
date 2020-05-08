import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  productId;
  filteredProduct;

  constructor(private route: ActivatedRoute, private productService: ProductService ) {
    this.productId=this.route.snapshot.params['productId'];
   this.productService.getProducts(this.productId).subscribe(res=>{
         this.filteredProduct=res.find(event =>  event.name === "Nirma" )
    });

    
   
  }

  ngOnInit() {}
}
