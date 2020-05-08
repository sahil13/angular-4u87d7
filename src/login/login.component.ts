import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  name;
  password;
  currentUser;
  flg:boolean=false;

  constructor(private userService: UserService,private router:Router) {
    this.name = new FormControl("", [
      Validators.required /* ,
      Validators.maxLength(3) */
    ]);
    this.password = new FormControl("", Validators.required);
    this.loginForm = new FormGroup({
      name: this.name,
      password: this.password
    });

    this.currentUser = sessionStorage.getItem("username");
  }

  login(loginFormValues) {
    this.userService.getLoggedInUser(loginFormValues).subscribe(response => {
      var len = response.length;
      if (len >= 1) {
        var obj = JSON.stringify(response);
        var obj1 = JSON.parse(obj);
        this.currentUser = obj1[0].username;
        sessionStorage.setItem("username", obj1[0].username);
        this.router.navigate(["/products"]);
      }else{
         sessionStorage.setItem("username", "");
         sessionStorage.setItem("flg", true);
      }
    });
  }

  ngOnInit() {}
}
