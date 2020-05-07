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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,   
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "products", component: ProductComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopHeaderComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
