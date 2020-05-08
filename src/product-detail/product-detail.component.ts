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
  selectedProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe(params => {
      let productId=+params.get("productId");
      this.selectedProduct = this.productService.getProducts(productId)
        

    });
  }

  ngOnInit() {}
}
