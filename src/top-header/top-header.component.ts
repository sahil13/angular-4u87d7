import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-top-header",
  templateUrl: "./top-header.component.html",
  styleUrls: ["./top-header.component.css"]
})
export class TopHeaderComponent implements OnInit {
  currentUser;
  constructor(private userService: UserService, private router: Router) {
    this.currentUser = this.userService.getUserName();
  }

  logout() {
    this.currentUser = "";
    sessionStorage.setItem("username", "");
    this.router.navigate(["/login"]);
  }

  ngOnInit() {}
}
