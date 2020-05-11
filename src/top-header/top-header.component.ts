import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-top-header",
  templateUrl: "./top-header.component.html",
  styleUrls: ["./top-header.component.css"]
})
export class TopHeaderComponent implements OnInit {
  currentUser;
  constructor(private router: Router) {
    this.currentUser = sessionStorage.getItem("username");
  }

  logout() {
    this.currentUser = "";
    sessionStorage.setItem("username", "");
    this.router.navigate("/login");
  }

  ngOnInit() {}
}
