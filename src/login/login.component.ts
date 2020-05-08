import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  name;
  password;

  constructor(private userService: UserService) {
    this.name=new FormControl('',[Validators.required,Validators.maxLength(3)]);
    this.password=new FormControl('',Validators.required);
    this.loginForm = new FormGroup({
      name:this.name,
      password:this.password
    });
  }

  login(){

  }

  ngOnInit() {}
}
