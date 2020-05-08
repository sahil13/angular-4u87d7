import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TopHeaderComponent } from "../top-header/top-header.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { ProductComponent } from "../product/product.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "../services/product.service";
import { UserService } from "../services/user.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "products", component: ProductComponent },
      { path: "product-detail/:productId", component: ProductDetailComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopHeaderComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    ProductDetailComponent
  ],
   providers: [
    ProductService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
