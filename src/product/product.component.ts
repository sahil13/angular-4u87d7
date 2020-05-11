import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  index = 0;
  products;
  currentUser;
  constructor(private productService: ProductService, private router: Router) {
    this.currentUser = sessionStorage.getItem("username");
  }

logout() {
    this.currentUser = "";
    sessionStorage.setItem("username", "");
    this.router.navigate(["/login"]);
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      // console.log(res);
      this.products = res;
    });
  }
}
