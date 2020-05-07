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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "products", component: ProductComponent },
      { path: "product-detail", component: ProductDetailComponent }
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
  bootstrap: [AppComponent]
})
export class AppModule {}
