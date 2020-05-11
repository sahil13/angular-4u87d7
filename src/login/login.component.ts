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
  flg = false;

  constructor(private userService: UserService, private router: Router) {
    this.name = new FormControl("", [
      Validators.required /* ,
      Validators.maxLength(3) */
    ]);
    this.password = new FormControl("", Validators.required);
    this.loginForm = new FormGroup({
      name: this.name,
      password: this.password
    });
  }

  login(loginFormValues) {
    this.userService.getLoggedInUser(loginFormValues).subscribe(response => {
      var len = response.length;
      if (len >= 1) {
        this.userService.setUserName(response);
        this.flg = false;
        this.router.navigate(["/products"]);
      } else {
        this.flg = true;
        this.router.navigate(["/login"]);
      }
    });
  }

  ngOnInit() {}
}
